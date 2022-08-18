import { HttpException } from "./httpException";

export class BadRequestException extends HttpException {
	constructor(message : string = "잘못 된 입력입니다.") {
		super(400,message);
	}
}