import { InternalServerException } from "@/common/exception/InternalServerException";
import { Controller } from "@/common/interfaces/Icontroller";
import { firebaseApp, storage } from "@/lib/FirebaseConfig";
import {getDownloadURL, ref, uploadBytes, uploadBytesResumable} from 'firebase/storage'
import { Handler, wrap } from "@/lib/request-handler";
import { upload } from "@/middleware/Upload";
import { Router } from "express";

export class ImageController implements Controller {
	path = '/image';
	router = Router();

	constructor() {
		this.initializeRoutes();
	}

	initializeRoutes() {
		const router = Router();

		router
			.post('/', upload.single('image'), wrap(this.post))

		this.router.use(this.path, router);
	}

	post: Handler = async (req, res) => {
		try {
			// Grab the file
			const file = req.file as Express.Multer.File;
			// Format the filename
			const timestamp = Date.now();
			const name = file.originalname.split(".")[0];
			const type = file.originalname.split(".")[1];
			const fileName = `${name}_${timestamp}.${type}`;
			// Step 1. Create reference for file name in cloud storage 
			const imageRef = ref(storage,fileName);
			// Step 2. Upload the file in the bucket storage
			await uploadBytes(imageRef,file.buffer);
			// Step 3. Grab the public url
			const downloadURL = await getDownloadURL(imageRef);
			return downloadURL;
		} catch (error) {
			console.log(error)
			throw new InternalServerException();
		}
	}
}