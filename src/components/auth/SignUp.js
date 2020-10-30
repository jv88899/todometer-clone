import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const SignUp = () => {
	const [userFirstName, setUserFirstName] = useState("");
	const [userLastName, setUserLastName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [userConfirmPassword, setUserConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const { signup } = useAuth();

	const handleChange = (e) => {
		if (e.target.id === "firstname") setUserFirstName(e.target.value);
		if (e.target.id === "lastname") setUserLastName(e.target.value);
		if (e.target.id === "email") setUserEmail(e.target.value);
		if (e.target.id === "password") setUserPassword(e.target.value);
		if (e.target.id === "confirmpassword")
			setUserConfirmPassword(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (userPassword !== userConfirmPassword) {
			return setError("Passwords do not match");
		}

		try {
			setError("");
			setLoading(true);
			await signup(userEmail, userPassword);
		} catch {
			setError("Failed to create an accout");
		}
		setLoading(false);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h5>Sign Up</h5>
				{error && <p>{error}</p>}
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
				<div>
					<label htmlFor="confirmpassword">Confirm Password</label>
					<input
						type="password"
						id="confirmpassword"
						onChange={handleChange}
					/>
				</div>
				<div>
					<button disabled={loading}>Sign Up</button>
				</div>
			</form>
			Already have an account? <Link to="/signin">Sign In Here</Link>
		</div>
	);
};

export default SignUp;
