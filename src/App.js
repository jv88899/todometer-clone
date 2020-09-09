import React, { useState } from "react";
import uid from "uid";
import CompletedTodo from "./components/CompletedTodo";
import DateDisplay from "./components/DateDisplay";
import Meter from "./components/Meter";
import PausedTodo from "./components/PausedTodo";
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
	const [pausedTodos, setPausedTodos] = useState([
		{
			id: uid(),
			text: "This todo is paused",
		},
		{
			id: uid(),
			text: "This todo is also paused",
		},
	]);
	const [completedTodos, setCompletedTodos] = useState([
		{
			id: uid(),
			text: "This todo is complete",
		},
		{
			id: uid(),
			text: "This todo is also complete",
		},
		{
			id: uid(),
			text: "Hey, look at that, another completed todo",
		},
	]);
	const [currentValue, setCurrentValue] = useState("");
	const [isEditable, setIsEditable] = useState(false);

	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const removePausedTodo = (id) => {
		setPausedTodos(pausedTodos.filter((todo) => todo.id !== id));
	};

	const removeCompletedTodo = (id) => {
		setCompletedTodos(completedTodos.filter((todo) => todo.id !== id));
	};

	const pauseTodo = (todo) => {
		let isCurrentlyPaused = pausedTodos.filter(
			(pausedTodo) => todo.id === pausedTodo.id
		);

		if (isCurrentlyPaused.length > 0) {
			let newTodos = todos.concat(todo);
			setTodos(newTodos);
			removePausedTodo(todo.id);
		} else if (isCurrentlyPaused.length === 0) {
			let newPausedTodos = pausedTodos.concat(todo);
			setPausedTodos(newPausedTodos);
			removeTodo(todo.id);
		}
	};

	const completeTodo = (todo) => {
		let newCompletedTodos = completedTodos.concat(todo);
		setCompletedTodos(newCompletedTodos);
		removeTodo(todo.id);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let newTodo = { text: currentValue, id: uid() };

		setTodos(todos.concat(newTodo));
		setCurrentValue("");
	};

	const resetProgress = () => {
		setTodos([]);
		setPausedTodos([]);
		setCompletedTodos([]);
	};

	return (
		<div className="min-h-screen max-h-full w-full bg-purple-900">
			<DateDisplay />
			<Meter
				todos={todos}
				pausedTodos={pausedTodos}
				completedTodos={completedTodos}
			/>
			<form
				onSubmit={handleSubmit}
				className="flex items-center justify-between mx-4 mt-4 h-16 bg-purple-600"
			>
				<input
					type="text"
					placeholder="Add a new todo"
					value={currentValue}
					className="h-10ml-2 w-10/12 pl-2 placeholder-purple-900 text-gray-100 bg-purple-600 focus:outline-none"
					onChange={(e) => setCurrentValue(e.target.value)}
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
			<div className="mx-4 mt-6">
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						isEditable={isEditable}
						removeTodo={removeTodo}
						pauseTodo={pauseTodo}
						completeTodo={completeTodo}
					/>
				))}
			</div>
			{pausedTodos.length > 0 && (
				<div className="mb-4">
					<div className="flex mx-2 mt-6 h-6 text-gray-100 items-center">
						<svg
							viewBox="0 0 20 20"
							fill="currentColor"
							className="chevron-right w-8 h-8"
						>
							<path
								fillRule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clipRule="evenodd"
							/>
						</svg>
						<h2 className="text-xl font-semibold">Do Later</h2>
					</div>
					<div className="mx-4 mt-6">
						{pausedTodos.map((todo) => (
							<PausedTodo
								key={todo.id}
								todo={todo}
								removeTodo={removePausedTodo}
								pauseTodo={pauseTodo}
							/>
						))}
					</div>
				</div>
			)}
			{completedTodos.length > 0 && (
				<div className="mb-4">
					<div className="flex mx-2 mt-6 h-6 text-gray-100">
						<svg
							viewBox="0 0 20 20"
							fill="currentColor"
							className="chevron-right w-8 h-8"
						>
							<path
								fillRule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clipRule="evenodd"
							/>
						</svg>
						<h2 className="text-xl font-semibold">Completed</h2>
					</div>
					<div className="mx-4 mt-6">
						{completedTodos.map((todo) => (
							<CompletedTodo
								key={todo.id}
								todo={todo}
								removeCompletedTodo={removeCompletedTodo}
							/>
						))}
					</div>
				</div>
			)}
			<button
				onClick={resetProgress}
				className="w-full flex align-middle justify-center pb-3 text-gray-100 text-sm uppercase"
				disabled={
					!(
						todos.length > 0 ||
						pausedTodos.length > 0 ||
						completedTodos.length > 0
					)
				}
			>
				Reset Progress
			</button>
		</div>
	);
}

export default App;
