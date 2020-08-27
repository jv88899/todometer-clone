import React, { useState } from "react";
import uid from "uid";
import Date from "./components/Date";
import Meter from "./components/Meter";
import Todo from "./components/Todo";

function App() {
	const [todos, setTodos] = useState([
		// status: 1 = complete
		// status: 2 = paused
		// status: 3 = not started
		{
			text: "This is my first todo",
			status: 1,
			id: uid(),
		},
		{
			text: "This is my second todo",
			status: 1,
			id: uid(),
		},
		{
			text: "This is my third todo",
			status: 1,
			id: uid(),
		},
		{
			text: "This is my fourth todo",
			status: 2,
			id: uid(),
		},
		{
			text: "This is my fifth todo",
			status: 3,
			id: uid(),
		},
	]);

	const [isEditable, setIsEditable] = useState(false);

	const removeTodo = (id) => {
		let newTodoList = todos.filter((todo) => todo.id !== id);
		setTodos(newTodoList);
	};

	return (
		<div className="min-h-screen max-h-full w-full bg-purple-900">
			<Date />
			<Meter todos={todos} />
			<form className="flex items-center justify-between mx-4 mt-4 h-16 bg-purple-600">
				<input
					type="text"
					placeholder="Add a new todo"
					className="h-10ml-2 w-10/12 pl-2 placeholder-purple-900 text-gray-100 bg-purple-600 focus:outline-none"
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
					<Todo
						key={todo.text}
						todo={todo}
						isEditable={isEditable}
						removeTodo={removeTodo}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
