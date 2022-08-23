import { ForbidenException } from "@/common/exception/ForbidenException";
import { returnError, makeReturnType } from "@model/ReturnType";
import {Handler, Request, Response } from "express";

export const ForbidenMiddleware : Handler = (req,res,next) =>{
  const error : returnError = {
    status : 404,
    message : '요청하신 api를 찾을 수 없습니다. 주소를 다시 확인 해 주세요.'
  }
  res.status(error.status).send(
    makeReturnType(null,error)
  );
}