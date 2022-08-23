import { ErrorRequestHandler } from "express";
import {HttpException} from "@/common/exception/httpException"
import { makeReturnType, returnError } from "@model/ReturnType";

export const ErrorMiddleware : ErrorRequestHandler = (
	err: HttpException,
  req,
  res,
  next,
) => {
  const error : returnError = {
    status : err.status || 500,
    message : err.message
  }
  res.status(error.status).send(
    makeReturnType(null,error)
  );
};