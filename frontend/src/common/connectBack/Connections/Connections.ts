import { Excpetions } from "@/common/Exception/Exceptions";
import { returnError, returnType } from "@model/ReturnType";
import { AxiosBack } from "../axiosback";

export class Connections {
  protected axiosback: AxiosBack;
  protected src : string;

  constructor(src : string) {
    this.axiosback = new AxiosBack();
    this.src = src;
  }

  protected getResponse(res : returnType) :  any {
    if(res.success) {
      return res.response;
    }
    else {
      throw new Excpetions(res.error as returnError);
    }
  }
}
