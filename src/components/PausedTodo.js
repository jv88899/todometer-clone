import React from "react";

const PausedTodo = ({
	todo,
	isEditable,
	removeTodo,
	completeTodo,
	pauseTodo,
}) => (
	<div className="flex justify-between items-center h-16 bg-purple-700 mb-4">
		<span>
			<svg
				viewBox="0 0 20 20"
				fill="currentColor"
				className="dots-horizontal w-6 h-6 text-purple-400"
			>
				<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
			</svg>
		</span>
		{!isEditable && (
			<span className="w-1/2 text-xs text-gray-100 truncate">
				{todo.text}
			</span>
		)}
		{isEditable && (
			<form className="w-1/2 text-xs">
				<input type="text" />
			</form>
		)}
		<span onClick={() => removeTodo(todo.id)}>
			<svg
				viewBox="0 0 20 20"
				fill="currentColor"
				className="x w-6 h-6 text-red-500"
			>
				<path
					fillRule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clipRule="evenodd"
				/>
			</svg>
		</span>
		<span onClick={() => pauseTodo(todo)}>
			<svg
				viewBox="0 0 20 20"
				fill="currentColor"
				className="pause w-6 h-6 text-yellow-500"
			>
				<path
					fillRule="evenodd"
					d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
					clipRule="evenodd"
				/>
			</svg>
		</span>
		<span onClick={() => completeTodo(todo)}>
			<svg
				viewBox="0 0 20 20"
				fill="currentColor"
				className="check w-6 h-6 text-green-500"
			>
				<path
					fillRule="evenodd"
					d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
					clipRule="evenodd"
				/>
			</svg>
		</span>
	</div>
);

export default PausedTodo;
