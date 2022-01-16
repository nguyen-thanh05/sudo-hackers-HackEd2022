import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";
import history from "./History";
import student from "./student";
import instructor from "./instructor";


export class App extends Component {
	render() {
		let renderComponent;
		renderComponent = (
			<Router history={history}>
				<Switch>
					<Route path="/student" exact component={student} />
				</Switch>
        <Switch>
					<Route path="/instructor" exact component={instructor} />
				</Switch>
			</Router>

		);
		return <div>{renderComponent}</div>;
	}
}

export default App;
