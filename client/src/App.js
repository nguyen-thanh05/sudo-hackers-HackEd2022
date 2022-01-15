import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";
import history from "./History";
import prof from "./prof";

export class App extends Component {
	render() {
		let renderComponent;
		renderComponent = (
			<Router history={history}>
				<Switch>
					<Route path="/prof" exact component={prof} />
				</Switch>
			</Router>
		);
		return <div>{renderComponent}</div>;
	}
}

export default App;
