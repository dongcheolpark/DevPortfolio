import {ProjectDetail} from '@model/BoardItem'
import { Connections } from './Connections'

class portfolioDetiailConnection extends Connections {
	constructor() {
		super('portfolio')
	}

	get = async (id : number) => {
		try{
			let res = await this.axiosback.get(this.src + '?id=' + id);
      res = this.getResponse(res);
      res.startdate = new Date(res.startdate);
      res.enddate = new Date(res.enddate);
			return res as ProjectDetail;
		}
		catch(err) {
			console.log(err);
		}
	}
}

export const portfolioDetailConnection = new portfolioDetiailConnection();
