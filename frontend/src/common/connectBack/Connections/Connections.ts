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

  protected getResponse<T>(res : returnType,changeType? : (value : any) => T) :  any {
    if(res.success) {
      if(changeType != undefined) {
        return changeType(res.response);
      }
      return res.response;
    }
    else {
      throw new Excpetions(res.error as returnError);
    }
  }
}
