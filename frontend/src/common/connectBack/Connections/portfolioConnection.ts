import { Board, ProjectCreate } from "@model/BoardItem";
import { Connections } from "./Connections";

class PortfolioConnection extends Connections {

  constructor() {
    super('portfolio');
  }

  get = async () => {
    try {
      const res = await this.axiosback.get(this.src);
      return this.getResponse(res) as Board[];
    }
    catch(err) {
      console.log(err);
    }
    return null;
  }
  post = async (data : ProjectCreate) : Promise<Board | null> => {
    try {
      const res = await this.axiosback.post(this.src,data)
      return this.getResponse(res) as Board;
    }
    catch (err){
      console.log(err);
    }
    return null;
  }
}

export const portfolioConnection = new PortfolioConnection();
