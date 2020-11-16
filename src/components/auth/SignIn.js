import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const SignIn = () => {
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	});

	const updateFormValue = (key, value) =>
		setFormValues((prev) => ({ ...prev, [key]: value }));

	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const { signin } = useAuth();

	const handleChange = (e) => {
		updateFormValue(e.target.name, e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await signin(formValues.email, formValues.password);
			history.push("/dashboard");
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
					<input
						type="email"
						name="email"
						onChange={handleChange}
						value={formValues.email}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						onChange={handleChange}
						value={formValues.password}
					/>
				</div>
				<div>
					<button disabled={loading}>Login</button>
				</div>
			</form>
			No account? <Link to="/signup">Sign Up Here</Link>
		</div>
	);
};

export default SignIn;
