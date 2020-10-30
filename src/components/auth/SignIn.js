import React, { useState } from "react";

const SignIn = () => {
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const handleChange = (e) => {
		if (e.target.id === "email") setUserEmail(e.target.value);
		if (e.target.id === "password") setUserPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(userEmail, userPassword);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h5>Sign In</h5>
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
				<div>
					<button>Login</button>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
