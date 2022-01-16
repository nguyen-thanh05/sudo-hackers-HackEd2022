import React, { Component } from "react";
import { Button, ButtonToolbar, Container } from "rsuite";
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
			greenColor: "#120078"
			//TODO: popup letting you know that you will get a notification
		};
		this.QColor = this.QColor();
	}

	QColor() {
		//queue.total((err, count) => {
		//	console.log('This queue has seen %d messages', count)
		//});
		if (count === 1) return "rgb(251, 236, 167)"
		else return "rgb(246, 246, 246)"
	}


	render() {
		const listItems = studQs.map((link) =>
			<li key={link.endpoint}>
				{link.endpoint}
				<ButtonToolbar>
					<Button color = "red" appearence = "ghost">
						Clarify
					</Button>
					<Button color="red" appearence="primary">
						Delete
					</Button>
				</ButtonToolbar>
			</li>
		);
		return (
			<div>
				<Container
					style={{
						backgroundColor: "rgb(39,94,37)",
						opacity: 0.6,
						padding: 10
					}}>
				</Container>
				<ul>
					{listItems}
				</ul>
			</div>
		);

	}
}

export default instructor;
