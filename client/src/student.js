import React, { Component } from "react";
import { Button } from "rsuite";

class student extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hello: "hello ",
		};
	}

	render() {
		return (
			<div>
                <p>test</p>
				<Button>{this.state.hello}</Button>
			</div>
		);
	}
}

export default student;
