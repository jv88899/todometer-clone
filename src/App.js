import React, { useState } from "react";
import uid from "uid";
import Date from "./components/Date";
import Meter from "./components/Meter";
import Todo from "./components/Todo";

function App() {
	const [todos, setTodos] = useState([
		{
			id: uid(),
			text: "This is my first todo",
		},
		{
			id: uid(),
			text: "This is my second todo",
		},
		{
			id: uid(),
			text: "This is my third todo",
		},
		{
			id: uid(),
			text: "This is my fourth todo",
		},
		{
			id: uid(),
			text: "This is my fifth todo",
		},
	]);
	const [currentValue, setCurrentValue] = useState("");
	const [isEditable, setIsEditable] = useState(false);

	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let inputForm = document.querySelector("input");
		let newTodo = { text: inputForm.value, id: uid() };

		setTodos(todos.concat(newTodo));
		inputForm.value = "";
	};

	return (
		<div className="min-h-screen max-h-full w-full bg-purple-900">
			<Date />
			<Meter todos={todos} />
			<form
				onSubmit={handleSubmit}
				className="flex items-center justify-between mx-4 mt-4 h-16 bg-purple-600"
			>
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
						key={todo.id}
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
