import { Controller } from "@/common/interfaces/Icontroller";
import sqlPool from "../lib/DbConfig";
import { Router } from "express";
import { Handler,wrap} from "../lib/request-handler"
import { Board, ProjectCreate } from "@model/BoardItem";
import { InternalServerException } from "../common/exception/InternalServerException";
import { ResultSetHeader } from "mysql2";
import { upload } from "@/middleware/Upload";

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
      .put('/', wrap(this.put))
    this.router.use(this.path, router);
	}

	get : Handler = async (req,res) => {
		const connection = sqlPool.promise()
		if(req.query.id != undefined) {
			const [rows] = await connection.query(`select board.*,project.contents from board join project on board.boardid = project.projectid where board.boardid = ${req.query.id}`);
			return (rows as any)[0];
		}
		else {
			const [rows] = await connection.query(`SELECT * FROM board ORDER BY \`startdate\` asc`);
			return rows;
		}
	}
	post : Handler = async (req,res) => {
		try {
			const body = req.body as ProjectCreate;
			const connection = sqlPool.promise()
			const querystring = `insert into board (title,startdate,enddate,discription,url)
			 values ('${body.title}','${body.startdate}','${body.enddate}','${body.contents.substring(0,100)}','${body.url}');`;
			const requestRes  = await connection.query(querystring);

			const id = (requestRes as ResultSetHeader[])[0].insertId;
			await connection.query(`insert into project (projectid,contents) 
			 values (${id},'${body.contents}')`);
			const board = await connection.query(`select * from board where boardid = ${id}`);
			
			return board[0];
		}
		catch (err) {
			console.log((err as Error).message);
			throw new InternalServerException();
		}
	}
	put : Handler =async (req,res) => {
		try {
			const body = req.body as ProjectCreate;	
			const connection = sqlPool.promise()
			let querystring =
			`update board
			SET title = '${body.title}',image = '${body.image}',url = '${body.url}',startdate = '${body.startdate}',enddate = '${body.enddate}',discription = '${body.contents.substring(0,100)}'
			where boardid = ${body.boardid}`
			await connection.query(querystring);
			console.log(body.contents);
			querystring = 
			`update project
			set contents = '${body.contents}'
			where projectid = ${body.boardid}
			`
			await connection.query(querystring);
			const board = await connection.query(`select * from board where boardid = ${body.boardid}`);
			return board[0];
		}	
		catch(err) {
			console.log((err as Error).message);
			throw new InternalServerException();
		}
	}
}