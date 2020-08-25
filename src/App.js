import React, { useState } from "react";
import Date from "./components/Date";
import Meter from "./components/Meter";
import Todo from "./components/Todo";

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
			<Meter todos={todos} />
			<form className="flex items-center justify-between mx-4 mt-4 h-16 bg-purple-600">
				<input
					type="text"
					className="h-10 border-0 w-10/12 bg-purple-600"
				/>
				<button
					type="submit"
					className="w-2/12 flex justify-center text-gray-100"
				>
					<svg
						viewBox="0 0 20 20"
						fill="currentColor"
						className="plus w-10 h-10"
					>
						<path
							fillRule="evenodd"
							d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</form>
			<div className="h-16 mx-4 mt-6">
				{todos.map((todo) => (
					<Todo todo={todo} />
				))}
			</div>
		</div>
	);
}

export default App;
