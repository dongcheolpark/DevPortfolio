import express, { Request, Response, NextFunction } from 'express';
var path = require('path');

export const home = express.Router();
home.get('/',function(req, res, next) {
	res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});