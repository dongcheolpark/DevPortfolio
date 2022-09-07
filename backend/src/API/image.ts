import { InternalServerException } from "@/common/exception/InternalServerException";
import { Controller } from "@/common/interfaces/Icontroller";
import { firebaseApp, storage } from "@/lib/FirebaseConfig";
import {deleteObject, getDownloadURL, ref, uploadBytes, uploadBytesResumable} from 'firebase/storage'
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
			/*
			const res = await deleteObject(ref(storage,'36955431.jpeg'));
			console.log(res);*/
			const uploadTask = uploadBytesResumable(imageRef,file.buffer);
			const getURL = new Promise((resolve,reject) => uploadTask.on('state_changed',async (snapshot) => {
				const progress =
				(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			console.log(`Upload is ${progress}% done`);
			},async () => {
				resolve(await getDownloadURL(uploadTask.snapshot.ref));
			}));
			return await getURL;
		} catch (error) {
			console.log(error)
			throw new InternalServerException();
		}
	}
}