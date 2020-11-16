import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { AuthProvider, useAuth } from "./contexts/AuthContext";

import Dashboard from "./components/Dashboard";
import HomePage from "./components/homepage/HomePage";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

const AuthenticatedDashboard = () => {
	const { currentUser } = useAuth();

	if (currentUser === null) {
		return <Redirect to="/signin" />;
	}

	return <Route exact path="/dashboard" component={Dashboard} />;
};

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<div>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/signin" component={SignIn} />
						<Route exact path="/signup" component={SignUp} />
						<AuthenticatedDashboard />
					</Switch>
				</div>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
