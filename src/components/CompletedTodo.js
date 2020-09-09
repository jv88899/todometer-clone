import React from "react";

const CompletedTodo = ({ todo, removeTodo }) => {
	console.log(removeTodo);
	return (
		<div className="flex justify-between items-center h-16 bg-purple-700 mb-4 px-2">
			<span className="w-3/4 text-xs text-gray-100 truncate">
				{todo.text}
			</span>
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
		</div>
	);
};

export default CompletedTodo;
