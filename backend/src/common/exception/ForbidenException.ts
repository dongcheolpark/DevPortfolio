import { HttpException } from "./httpException";

export class ForbidenException extends HttpException {
	constructor() {
		super(404,'요청하신 API를 찾을 수 없습니다. 주소를 다시 확인해 주세요.');
	}
}