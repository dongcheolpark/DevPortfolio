import {ProjectDetail} from '@model/BoardItem'
import { Connections } from './Connections'

class portfolioDetiailConnection extends Connections {
	constructor() {
		super('portfolio')
	}

	get = async (id : number) => {
		try{
			const res = await this.axiosback.get(this.src + '?id=' + id);
			return this.getResponse(res) as ProjectDetail;
		}
		catch(err) {
			console.log(err);
		}
	}
}

export const portfolioDetailConnection = new portfolioDetiailConnection();
