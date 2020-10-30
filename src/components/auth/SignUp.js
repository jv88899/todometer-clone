import React, { useState } from "react";

const SignUp = () => {
	const [userFirstName, setUserFirstName] = useState("");
	const [userLastName, setUserLastName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const handleChange = (e) => {
		if (e.target.id === "firstname") setUserFirstName(e.target.value);
		if (e.target.id === "lastname") setUserLastName(e.target.value);
		if (e.target.id === "email") setUserEmail(e.target.value);
		if (e.target.id === "password") setUserPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(userFirstName, userLastName, userEmail, userPassword);
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
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						onChange={handleChange}
					/>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
