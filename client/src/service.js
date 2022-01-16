const axios = require("axios");

class DataCalls {
	constructor() {
		this.url = "http://localhost:3001/prof/";
	}

	async postData() {
		let url = `${this.url}`;
		const response = await axios.post(url);
		console.log(response);
		return response;
	}
}

export default DataCalls;
