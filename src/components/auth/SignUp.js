import React, { useState } from "react";
import { firestore } from "../../firebase/config";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const SignUp = () => {
	const [userFirstName, setUserFirstName] = useState("");
	const [userLastName, setUserLastName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [userConfirmPassword, setUserConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const { signup, currentUser } = useAuth();

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

		setError("");
		setLoading(true);
		signup(userEmail, userPassword).then((newUser) =>
			firestore
				.collection("users")
				.doc(newUser.user.uid)
				.set({
					firstName: userFirstName,
					lastName: userLastName,
					todos: [],
				})
				.then(() => history.push("/dashboard"))
				.catch(() => setError("Failed to create an account"))
		);
		setLoading(false);
	};

	return (
		<div className="mx-4 mt-4 text-gray-100">
			<h2 className="mb-4 text-2xl">Sign up for free</h2>
			<form className="mb-4" onSubmit={handleSubmit}>
				{error && <p>{error}</p>}
				<div className="flex flex-col mb-4">
					<label htmlFor="firstname">First Name</label>
					<input type="text" id="firstname" onChange={handleChange} />
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="lastname">Last Name</label>
					<input type="text" id="lastname" onChange={handleChange} />
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" onChange={handleChange} />
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						onChange={handleChange}
					/>
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="confirmpassword">Confirm Password</label>
					<input
						type="password"
						id="confirmpassword"
						onChange={handleChange}
					/>
				</div>
				<div className="flex flex-col mb-4">
					<button disabled={loading}>Sign Up</button>
				</div>
			</form>
			Already have an account? <Link to="/signin">Sign In Here</Link>
		</div>
	);
};

export default SignUp;
