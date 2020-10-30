import React, { useState } from "react";

const SignIn = () => {
	const handleChange = (e) => {
		console.log(e);
	};

	const handleSubmit = (e) => {
		console.log(e);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h5>Sign In</h5>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						onChange={this.handleChange}
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
