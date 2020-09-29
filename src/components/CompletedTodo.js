import React from "react";
import { ReactComponent as CloseIcon } from "../icons/close.svg";

const CompletedTodo = ({ todo, removeCompletedTodo }) => (
	<div className="flex justify-between items-center h-16 bg-purple-700 mb-4 px-2">
		<span className="w-3/4 text-xs text-gray-100 truncate">
			{todo.text}
		</span>
		<span onClick={() => removeCompletedTodo(todo.id)}>
			<CloseIcon />
		</span>
	</div>
);

export default CompletedTodo;
