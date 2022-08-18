import { Controller } from "@/common/interfaces/Icontroller";
import sqlPool from "../lib/DbConfig";
import { Router } from "express";
import { Handler,wrap} from "../lib/request-handler"
import { Board, ProjectCreate } from "@model/BoardItem";
import { InternalServerException } from "../common/exception/InternalServerException";
import { ResultSetHeader } from "mysql2";

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
		try {
			const body = req.body as ProjectCreate;
			const connection = sqlPool.promise()

			const requestRes  = await connection.query(`insert into board (title,startdate,enddate,discription)
			 values ('${body.title}','${body.startdate}','${body.enddate}','${body.contents.substring(0,100)}');`);
			const id = (requestRes as ResultSetHeader[])[0].insertId;

			const board = await connection.query(`select * from board where boardid = ${id}`);
			
			return board[0];
		}
		catch (err) {
			console.log((err as Error).message);
			throw new InternalServerException();
		}
	}
}