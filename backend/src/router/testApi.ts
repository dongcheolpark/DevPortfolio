import express, { Request, Response, NextFunction } from 'express';
export const testApiRouter = express.Router();
testApiRouter.use(function(req, res, next) {
	next();
  });
testApiRouter.get('/getTest', async (req, res) => {
	try {
	  res.send({
		msg: 'This my response : get'
	  })
	} catch (err) {
	  console.log(err);
	  res.send({
		error: 'Can"t read api data',
	  });
	}
  }); 