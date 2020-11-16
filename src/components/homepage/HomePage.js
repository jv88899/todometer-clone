import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="text-gray-100">
			Home
			<div>
				<Link to="/signup">Sign Up</Link>
				<br />
				<Link to="/signin">Sign In</Link>
			</div>
		</div>
	);
};

export default HomePage;
