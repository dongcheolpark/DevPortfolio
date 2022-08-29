import { Board, ProjectCreate } from "@model/BoardItem";
import { returnType } from "@model/ReturnType";
import { Connections } from "./Connections";

class PortfolioConnection extends Connections {

  constructor() {
    super('portfolio');
  }
  get = async () => {
    try {
      let res = await this.axiosback.get(this.src);
      res = this.getResponse(res);
      (res as Array<any>).forEach((item) => {
        item.startdate = new Date(item.startdate);
        item.enddate = new Date(item.enddate);
      })
      return res as Board[];
    }
    catch(err) {
      console.log(err);
    }
    return null;
  }
  post = async (data : ProjectCreate) => {
    try {
      let res = await this.axiosback.post(this.src,data)
      res = this.getResponse(res);
      res.startdate = new Date(res.startdate);
      res.enddate = new Date(res.enddate);
      return res as Board;
    }
    catch (err){
      console.log(err);
    }
    return null;
  }
}

export const portfolioConnection = new PortfolioConnection();
