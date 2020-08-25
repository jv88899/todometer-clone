import React, { useState } from "react";
import Date from "./components/Date";

function App() {
	const [todos, setTodos] = useState([
		{
			text: "This is my first todo",
			status: 1,
		},
		{
			text: "This is my second todo",
			status: 1,
		},
		{
			text: "This is my third todo",
			status: 1,
		},
		{
			text: "This is my fourth todo",
			status: 2,
		},
		{
			text: "This is my fifth todo",
			status: 3,
		},
	]);
	return (
		<div className="min-h-screen max-h-full w-full bg-purple-900">
			<Date />
			<div className="w-full h-4">
				<div className="flex bg-purple-700 h-full mt-8 mx-4 rounded-sm">
					{}
				</div>
			</div>
		</div>
	);
}

export default App;
