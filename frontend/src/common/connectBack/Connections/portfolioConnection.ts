import { Connectons } from "./Connections";

class PortfolioConnection extends Connectons {

  constructor() {
    super('portfolio');
  }

  get = async () => {
    try {
      const res = await this.axiosback.get(this.src);
      return this.getResponse(res);
    }
    catch(err) {
      console.log(err);
    }
    return null;
  }
}

export const portfolioConnection = new PortfolioConnection();
