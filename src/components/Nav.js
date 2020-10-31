import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const Nav = () => {
	const [error, setError] = useState("");

	const { currentUser, logout } = useAuth();

	const history = useHistory();

	const handleLogout = async () => {
		setError("");

		try {
			await logout();
			history.push("/");
		} catch {
			setError("Failed to logout");
		}
	};

	return (
		<nav className="text-gray-100">
			<div>MENU</div>
			<div onClick={handleLogout}>PROFILE</div>
			{currentUser && currentUser.email}
		</nav>
	);
};

export default Nav;
