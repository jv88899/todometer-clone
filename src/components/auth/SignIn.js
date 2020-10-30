import React, { useState } from "react";

const SignIn = () => {
	return (
		<div>
			<form>
				<h5>Sign In</h5>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" />
				</div>
				<div>
					<button>Login</button>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
