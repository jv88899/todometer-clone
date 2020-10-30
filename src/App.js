import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/auth/SignIn";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/signin" component={SignIn} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
