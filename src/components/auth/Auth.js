import React, { useEffect, useState, createContext } from "react";
import { projectAuth } from "../../firebase/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		projectAuth.auth().onAuthStateChanged(setCurrentUser);
	}, []);

	return (
		<AuthContext.Provider value={{ currentUser }}>
			{children}
		</AuthContext.Provider>
	);
};
