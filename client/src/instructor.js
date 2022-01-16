import React, { Component } from "react";
import { Button, ButtonToolbar, Container, List } from "rsuite";
import { count } from "rsuite/esm/utils/ReactChildren";
var studQs = [
	{ endpoint: 'america' },
	{ endpoint: 'canada' },
	{ endpoint: 'norway' },
	{ endpoint: 'bahamas' }
];

class instructor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headerStr: "Class of \n Date: \n ",
			instrStr: "Swipe to discard question.\n",
			greenColor: "#120078",
			course: "test",
			instructor: "test",
			date: this.getCurrentDate(),
			currentQuestion: this.getCurrentQuestions()
			//TODO: popup letting you know that you will get a notification
		};
		this.QColor = this.QColor();
	}

	getCurrentQuestions() {
		return 'This is a placeholder for the current question'
	}

	getCurrentDate(separator = '/') {

		let newDate = new Date()
		let date = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();

		return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
	}

	QColor() {
		//queue.total((err, count) => {
		//	console.log('This queue has seen %d messages', count)
		//});
		if (count === 1) return "rgb(251, 236, 167)"
		else return "rgb(246, 246, 246)"
	}
	removeItem(index) {
		const remove = (index) => {
			var newList = studQs
			newList.splice(index, 1)
			this.setList(newList);
		};
	}
	render() {
		const listItems = studQs.map((link) =>
			<li key={link.endpoint}>
				{link.endpoint}
				<ButtonToolbar>
<<<<<<< HEAD
					<Button style={{
						backgroundColor: "rgb(39,94,37)",
						color: "white",
						border: "none",
						borderRadius: "8px"
					}}>
=======
					<Button color = "red" appearence = "ghost">
>>>>>>> 84f0581a702ea3ef0328a1a94ff6faa3087088dc
						Clarify
					</Button>
					<Button style={{
						backgroundColor: "rgb(39,94,37)",
						color: "white",
						border: "none",
						borderRadius: "8px",
						marginLeft: "10px"
					}}>
						Dismiss
					</Button>
				</ButtonToolbar>
			</li >
		);
		return (
			<div>
				<Container
					style={{
						backgroundColor: "rgb(39, 94, 57)",
						padding: "15px"
					}}
				>
					<div style={{
						paddingBottom: 5,
						textAlign: "center",
						color: "white",
						fontSize: "16px",
					}}>
						Course: {this.state.course}
					</div>
					<div style={{
						paddingBottom: 5,
						textAlign: "center",
						color: "white",
						fontSize: "16px"
					}}>
						Instructor: {this.state.instructor}
					</div>
					<div style={{
						paddingBottom: 5,
						textAlign: "center",
						color: "white",
						fontSize: "16px"
					}}>
						{this.state.date}
					</div>
				</Container>
				<List
					style={{
						listStyleType: "none",
						padding: 15,
						marginTop: "10px"
					}}>
					{listItems}
				</List>
			</div>
		);

	}
}

export default instructor;
