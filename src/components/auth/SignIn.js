import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const SignIn = () => {
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const { login } = useAuth();

	const handleChange = (e) => {
		if (e.target.id === "email") setUserEmail(e.target.value);
		if (e.target.id === "password") setUserPassword(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login(userEmail, userPassword);
		} catch {
			setError("Failed to sign in");
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h5>Sign In</h5>
				{error && <p>{error}</p>}
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
					<button disabled={loading}>Login</button>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
