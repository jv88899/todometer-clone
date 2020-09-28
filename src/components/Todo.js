import React from "react";
import { ReactComponent as CloseIcon } from "../icons/close.svg";
import { ReactComponent as CompleteIcon } from "../icons/complete.svg";
import { ReactComponent as EllipsisIcon } from "../icons/ellipsis.svg";
import { ReactComponent as PauseIcon } from "../icons/pause.svg";

const Todo = ({
	isEditable,
	todo,
	removeTodo,
	completeTodo,
	pauseTodo,
	editTodo,
}) => {
	return (
		<div
			className={`flex ${
				isEditable ? "justify-start" : "justify-evenly"
			} items-center h-16 bg-purple-700 mb-4`}
		>
			{!isEditable && (
				<span onClick={editTodo}>
					<EllipsisIcon />
				</span>
			)}
			{isEditable && (
				<form className="flex w-full text-xs">
					<input
						className="w-3/4 h-8 ml-2"
						type="text"
						value={todo.text}
					/>
					<button className="w-1/4">Submit</button>
				</form>
			)}
			{!isEditable && (
				<span className="w-1/2 text-xs text-gray-100 truncate">
					{todo.text}
				</span>
			)}
			{!isEditable && (
				<span onClick={() => removeTodo(todo.id)}>
					<CloseIcon />
				</span>
			)}
			{!isEditable && (
				<span onClick={() => pauseTodo(todo)}>
					<PauseIcon />
				</span>
			)}
			{!isEditable && (
				<span onClick={() => completeTodo(todo)}>
					<CompleteIcon />
				</span>
			)}
		</div>
	);
};

export default Todo;
