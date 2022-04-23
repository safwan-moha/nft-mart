export default function() {
	try {
		if(process.env.NODE_ENV === "production" ){
			return {
				resourceUrl: '',
			};
		} else {
			return {
				resourceUrl: process.env.REACT_APP_BASE_URL + "/api",
			};
		}
	}
	catch(e) {
		console.log(e);
		throw new Error("MISSING VALUES")
	}
}
