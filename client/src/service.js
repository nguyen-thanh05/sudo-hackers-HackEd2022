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

	async postAdd() {
		let url = `${this.url}add`;
		const response = await axios.post(url);
		console.log(response);
		return response;
	}

	async postUpdate() {
		let url = `${this.url}update`;
		const response = await axios.post(url);
		console.log(response);
		return response;
	}
	async postDelete() {
		let url = `${this.url}delete`;
		const response = await axios.post(url);
		console.log(response);
		return response;
	}
	async postGet() {
		let url = `${this.url}get`;
		const response = await axios.post(url);
		console.log(response);
		return response;
	}
}

export default DataCalls;