export type returnError = {
	status : number,
	message : string
}

export type returnType = {
	success : boolean | null,
	response : unknown | null,
	error : returnError | null
}

export const makeReturnType = (response : any = null, error : returnError|null = null) : returnType => {
	var res : returnType = {
		success : null,
		response : null,
		error : null
	}; 
	if(response != null && error == null) {
		res.success = true;
		res.response = response;
	}
	else if(response == null && error != null) {
		res.success = false;
		res.error = error;
	}
	return res;	
}