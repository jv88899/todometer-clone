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
		<div className="mx-4 mt-4">
			<h2 className="mb-4 text-2xl text-gray-100">
				Sign in to your account
			</h2>
			<form className="mb-4" onSubmit={handleSubmit}>
				{error && <p>{error}</p>}
				<div className="flex flex-col mb-4">
					<label htmlFor="email" className="text-gray-100">
						Email
					</label>
					<input
						type="email"
						name="email"
						onChange={handleChange}
						value={formValues.email}
					/>
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="password" className="text-gray-100">
						Password
					</label>
					<input
						type="password"
						name="password"
						onChange={handleChange}
						value={formValues.password}
					/>
				</div>
				<div className="flex flex-col mb-4 text-gray-100">
					<button disabled={loading}>Login</button>
				</div>
			</form>
			<p className="text-gray-100">
				No account? <Link to="/signup">Sign Up Here</Link>
			</p>
		</div>
	);
};

export default SignIn;
