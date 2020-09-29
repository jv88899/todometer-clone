import React from "react";
import { ReactComponent as CloseIcon } from "../icons/close.svg";
import { ReactComponent as CompleteIcon } from "../icons/complete.svg";
import { ReactComponent as EllipsisIcon } from "../icons/ellipsis.svg";
import { ReactComponent as PlayIcon } from "../icons/play.svg";

const PausedTodo = ({
	todo,
	isEditable,
	removeTodo,
	completeTodo,
	pauseTodo,
}) => (
	<div className="flex justify-evenly items-center h-16 bg-purple-700 mb-4">
		<span>
			<EllipsisIcon />
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
			<CloseIcon />
		</span>
		<span onClick={() => pauseTodo(todo)}>
			<PlayIcon />
		</span>
		<span onClick={() => completeTodo(todo)}>
			<CompleteIcon />
		</span>
	</div>
);

export default PausedTodo;
