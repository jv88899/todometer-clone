import React, { useState } from "react";
import CompletedTodo from "./components/CompletedTodo";
import DateDisplay from "./components/DateDisplay";
import Meter from "./components/Meter";
import PausedTodo from "./components/PausedTodo";
import Todo from "./components/Todo";
import { useTodos } from "./hooks/useTodos";

function App() {
	const {
		pausedTodos,
		activeTodos,
		resetActive,
		todos,
		pauseTodo,
		removeTodo,
		createTodo,
		completeTodo,
		completedTodos,
		resetTodos,
	} = useTodos();

	const [currentValue, setCurrentValue] = useState("");
	const [isEditable, setIsEditable] = useState(false);

	const editTodo = () => {
		setIsEditable(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!currentValue) return;

		createTodo(currentValue);
		setCurrentValue("");
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
					{/* As mentioned we should try to remove all SVGs into an icons folder */}
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
				{activeTodos.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						isEditable={isEditable}
						editTodo={editTodo}
						removeTodo={removeTodo}
						pauseTodo={pauseTodo}
						completeTodo={completeTodo}
					/>
				))}
			</div>
			{pausedTodos.length > 0 && (
				<div className="mb-4">
					<div className="flex mx-2 mt-6 h-6 text-gray-100 items-center">
						{/* As mentioned we should try to remove all SVGs into an icons folder */}
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
								removeTodo={removeTodo}
								pauseTodo={pauseTodo}
								completeTodo={completeTodo}
							/>
						))}
					</div>
				</div>
			)}
			{completedTodos.length > 0 && (
				<div className="mb-4">
					<div className="flex mx-2 mt-6 h-6 text-gray-100">
						{/* As mentioned we should try to remove all SVGs into an icons folder */}
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
								removeCompletedTodo={removeTodo}
							/>
						))}
					</div>
				</div>
			)}
			<button
				onClick={resetTodos}
				className="w-full flex align-middle justify-center pb-3 text-gray-100 text-sm uppercase"
				disabled={resetActive}
			>
				Reset Progress
			</button>
		</div>
	);
}

export default App;
