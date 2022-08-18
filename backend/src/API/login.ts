import express, {Router, Request, Response, NextFunction, json} from 'express';
import sqlPool from "../lib/DbConfig";
import bodyParser from 'body-parser';
import { Controller } from "@/common/interfaces/Icontroller";
import { Handler, wrap } from '../lib/request-handler';
import { HttpException } from '../common/exception/httpException';

export default class LoginController implements Controller{
	path = '/Login'
	router = Router();

	constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    const router = Router();

    router
      .post('/', wrap(this.loginGet))
      .get('/', wrap(this.loginPost))

    this.router.use(this.path, router);
  }

	loginGet : Handler = async (req,res) => {
		if(req.session != undefined) {
			return {
				isLogin : true
			};
		}
		return {
			isLogin : false
		}
	}

	loginPost : Handler = async (req,res) => {
		if(req.session != undefined) {
			return {
				isLogin : true
			}
		}
		var id : string = req.body.id;
		var password : string = req.body.password;
		const queryString = `
			SELECT * FROM admins
			where AdminID = '${id}' AND AdminPW = '${password}'
		`;
		const connection = sqlPool.promise();
		try {
			const [rows] = await connection.query(queryString);
			/*
			if(rows[0] != undefined) {
				console.log(req.session);
				req.session.user = {
					id : id,
					pw : password
				}
				req.session.save(err => {
					if (err) {
						console.log(err);
						throw err;
					}
					return {
						success : true,
						message : `${id}님 로그인 되었습니다.`
					};
				});
			}
			*/
		}
		catch(err) {
			console.log(err)
		}
	}
}