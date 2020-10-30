import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AuthProvider } from "./components/auth/Auth";

import Dashboard from "./components/Dashboard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<div>
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route exact path="/signin" component={SignIn} />
						<Route exact path="/signup" component={SignUp} />
					</Switch>
				</div>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
