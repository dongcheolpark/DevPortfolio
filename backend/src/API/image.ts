import { InternalServerException } from "@/common/exception/InternalServerException";
import { Controller } from "@/common/interfaces/Icontroller";
import { Handler, wrap } from "@/lib/request-handler";
import { upload } from "@/middleware/Upload";
import { Router } from "express";
import { imageAPI } from "@/lib/ImageAPI";

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
			const file = req.file as Express.Multer.File;
			const timestamp = Date.now();
			const name = file.originalname.split(".")[0];
			const fileName = `${name}_${timestamp}`;
			const response = await imageAPI(file,fileName)
			return {url : response.data.url};
		} catch (error) {
			throw new InternalServerException();
		}
	}
}