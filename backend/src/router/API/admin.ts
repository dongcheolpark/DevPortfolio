import express, { Request, Response, NextFunction, json } from 'express';
import connection from "../../lib/DbConfig";
import bodyParser from 'body-parser';

export const AdminRouter = express.Router();
AdminRouter.use(bodyParser.json());

AdminRouter.use(function (req, res, next) {
	next();
});

//로그인

AdminRouter.get('/login',(req,res) => {
	if(req.session != undefined) {
		return res.send({
			isLogin : true
		});
	}
	return res.send({
		isLogin : false
	})
})

AdminRouter.post('/login',(req,res) => {
	if(req.session != undefined) {
		return res.send({
			isLogin : true
		})
	}
	var id : string = req.body.id;
	var password : string = req.body.password;
	const queryString = `
		SELECT * FROM admins
		where AdminID = '${id}' AND AdminPW = '${password}'
	`;
	connection.query(queryString,(error,rows) => {
		try {
			if(error) throw error
			if(rows[0] != undefined) {
				console.log(req.session);
				req.session.user = {
					id : id,
					pw : password
				}
				req.session.save(err => {
					if (err) {
							console.log(err);
							return res.status(500).send("<h1>500 error</h1>");
					}
					res.send({
						success : true,
						message : `${id}님 로그인 되었습니다.`
					});
				});
			}
			else {
				throw new Error('사용자가 없습니다.');
			}
		}
		catch(err) {
			res.send(err);
		}
	}); 
})