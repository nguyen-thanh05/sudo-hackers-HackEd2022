import React, { Component } from "react";
import { Button } from "rsuite";

import DataCalls from "./service";

class prof extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hello: "hello ",
			show: true,
		};

		this.DataCalls = new DataCalls();
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick() {
		const response = this.DataCalls.getData();
		console.log(response);
	}

	render() {
		return (
			<Button onClick={this.handleButtonClick}>{this.state.hello}</Button>
		);
	}
}

export default prof;
