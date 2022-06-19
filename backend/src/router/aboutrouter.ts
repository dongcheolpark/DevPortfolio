import express, { Request, Response, NextFunction } from 'express';
export const aboutRouter = express.Router();
aboutRouter.use(function(req, res, next) {
	next();
  });
  
aboutRouter.get('/', function(req, res) {
res.send('hi1');
});

aboutRouter.get('/about', function(req, res) {
res.send('hi2');
});
 