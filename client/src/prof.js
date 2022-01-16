import React, { Component } from "react";
import { Button } from "rsuite";

import DataCalls from "./service";

class prof extends Component {
	constructor(props) {
		super(props);
		this.state = {
			add: "add ",
			update: "update ",
			delete: "delete ",
			get: "get ",
			show: true,
		};

		this.DataCalls = new DataCalls();
		this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
		this.handleUpdateButtonClick = this.handleUpdateButtonClick.bind(this);
		this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
		this.handleGetButtonClick = this.handleGetButtonClick.bind(this);
	}

	handleAddButtonClick() {
		const response = this.DataCalls.postAdd();
		console.log(response);
	}

	handleUpdateButtonClick() {
		const response = this.DataCalls.postUpdate();
		console.log(response);
	}

	handleDeleteButtonClick() {
		const response = this.DataCalls.postDelete();
		console.log(response);
	}

	handleGetButtonClick() {
		const response = this.DataCalls.postGet();
		console.log(response);
	}

	render() {
		return (
			<ul>
			<Button onClick={this.handleAddButtonClick}>{this.state.add}</Button>
			<Button onClick={this.handleUpdateButtonClick}>{this.state.update}</Button>
			<Button onClick={this.handleDeleteButtonClick}>{this.state.delete}</Button>
			<Button onClick={this.handleGetButtonClick}>{this.state.get}</Button>
			</ul>
		);
	}
}

export default prof;
