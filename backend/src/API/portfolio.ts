import { Controller } from "@/common/interfaces/Icontroller";
import sqlPool from "../lib/DbConfig";
import { types } from "@model/BoardItem";
import { Router } from "express";
import { Handler,wrap} from "../lib/request-handler"
import { HttpException } from "../common/exception/httpException";

export class PortfolioController implements Controller {
	path = '/portfolio';
	router = Router();

	constructor() {
		this.initializeRoutes();
	}

	initializeRoutes() {
    const router = Router();

    router
      .get('/', wrap(this.get))
      .post('/', wrap(this.post))
    this.router.use(this.path, router);
	}

	get : Handler = async (req,res) => {
		const connection = sqlPool.promise()
		const [rows] = await connection.query('select * from board');
		return rows;
	}
	post : Handler = async (req,res) => {
		var body = req.body as types.ProjectCreate;
		console.log(body);

		var board : types.Board = {
			boardid: 2,
			title: body.title,
			image: '',
			url: '',
			startdate: '',
			enddate: '',
			discription: ''
		}
		return board;
	}
}