import { returnError } from "@model/ReturnType";

export class Excpetions extends Error {
  constructor(err : returnError) {
    super(err.message);
  }
}
