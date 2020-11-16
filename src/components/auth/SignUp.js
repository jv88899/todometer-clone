import React, { useState } from "react";
import { firestore } from "../../firebase/config";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const SignUp = () => {
	const [formValues, setFormValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const updateFormValue = (key, value) =>
		setFormValues((prev) => ({ ...prev, [key]: value }));

	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const { signup, currentUser } = useAuth();

	const handleChange = (e) => {
		updateFormValue(e.target.name, e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const {
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
		} = formValues;

		if (password !== confirmPassword) {
			return setError("Passwords do not match");
		}

		setError("");
		setLoading(true);
		signup(email, password).then((newUser) =>
			firestore
				.collection("users")
				.doc(newUser.user.uid)
				.set({
					firstName,
					lastName,
					todos: [],
				})
				.then(() => history.push("/dashboard"))
				.catch(() => setError("Failed to create an account"))
		);
		setLoading(false);
	};

	return (
		<div className="mx-4 mt-4">
			<h2 className="mb-4 text-2xl text-gray-100">Sign up for free</h2>
			<form className="mb-4" onSubmit={handleSubmit}>
				{error && <p>{error}</p>}
				<div className="flex flex-col mb-4">
					<label htmlFor="firstname" className="text-gray-100">
						First Name
					</label>
					<input
						type="text"
						name="firstName"
						onChange={handleChange}
						value={formValues.firstName}
					/>
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="lastname" className="text-gray-100">
						Last Name
					</label>
					<input
						type="text"
						name="lastName"
						onChange={handleChange}
						value={formValues.lastName}
					/>
				</div>
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
				<div className="flex flex-col mb-4">
					<label htmlFor="confirmpassword" className="text-gray-100">
						Confirm Password
					</label>
					<input
						type="password"
						name="confirmPassword"
						onChange={handleChange}
						value={formValues.confirmPassword}
					/>
				</div>
				<div className="flex flex-col mb-4 text-gray-100">
					<button disabled={loading}>Sign Up</button>
				</div>
			</form>
			<p className="text-gray-100">
				Already have an account? <Link to="/signin">Sign In Here</Link>
			</p>
		</div>
	);
};

export default SignUp;
