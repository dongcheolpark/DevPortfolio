import express, { Request, Response, NextFunction } from 'express';
import connection from "../lib/DbConfig";
import { refererCheck } from '../middleware/referCheck';
import { AdminRouter } from './API/admin';

export const APIRouter = express.Router();
APIRouter.use(refererCheck);
APIRouter.use(function (req, res, next) {
	next();
});

APIRouter.get('/list', async (req, res) => {
	connection.query('select * board', (error, rows) => {
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
	})
});

APIRouter.use('/admin',AdminRouter);

