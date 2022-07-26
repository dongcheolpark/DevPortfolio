import express, { Request, Response, NextFunction } from 'express';
import connection from "../lib/DbConfig";

export const testApiRouter = express.Router();
testApiRouter.use(function (req, res, next) {
	next();
});
testApiRouter.get('/getTest', async (req, res) => {
	connection.query('SELECT * from test', (error, rows) => {
		try {
			if (error) throw error;
			console.log('User info is: ', rows);
			res.send(rows);
		}
		catch (err) {
			console.log(err);
			res.send({
				error: 'Can"t read api data',
			});
		}
	});
}); 

testApiRouter.get('/test',async (req,res) => {
	res.send('hello');
})