import React, { Component } from "react";
import { Button } from "rsuite";

class prof extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hello: "hello ",
		};
	}

	render() {
		return (
			<div>
				<Button>{this.state.hello}</Button>
			</div>
		);
	}
}

export default prof;