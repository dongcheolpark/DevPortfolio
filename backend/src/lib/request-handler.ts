import { makeReturnType } from '../../../models/ReturnType';
import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../common/exception/httpException';

export type Handler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => any | Promise<any>;

export const wrap = (handler: Handler) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await handler(req, res, next);
      res.json(
        makeReturnType(response,null)
			);
    } catch (err) {
      next(err);
    }
  };
