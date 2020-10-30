import React, { useState } from "react";

const SignUp = () => {
	const [userFirstName, setUserFirstName] = useState("");
	const [userLastName, setUserLastName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const handleChange = (e) => {
		return;
	};

	const handleSubmit = (e) => {
		return;
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h5>Sign Up</h5>
				<div>
					<label htmlFor="firstname">First Name</label>
					<input type="text" id="firstname" onChange={handleChange} />
				</div>
				<div>
					<label htmlFor="lastname">Last Name</label>
					<input type="text" id="lastname" onChange={handleChange} />
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" onChange={handleChange} />
				</div>
			</form>
		</div>
	);
};

export default SignUp;
