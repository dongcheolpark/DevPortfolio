var referList = [
	'http://localhost:8080/',
	'http://localhost:3000/'
]

export const refererCheck = (req: any, res: any, next: any) => {
	var refer:string = req.headers.referer;
	var checkNext = false;
	referList.forEach((item) => {
		if (refer.indexOf(item) == 0) {
			next();
			checkNext = true;
		}
	})
	if(!checkNext) {
		res.status(403).send('Referer Error');
	}
}