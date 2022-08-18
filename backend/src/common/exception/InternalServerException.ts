import { HttpException } from "./httpException";

export class InternalServerException extends HttpException {
	constructor() {
		super(500,'서버 내부 오류입니다. 자세한 내용은 관라자에게 문의 해 주세요.');
	}
}