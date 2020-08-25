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
			<div className="h-16 mx-4 mt-6">
				{todos.map((todo) => (
					<Todo todo={todo} />
				))}
			</div>
		</div>
	);
}

export default App;
