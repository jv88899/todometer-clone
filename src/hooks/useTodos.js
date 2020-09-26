import { useState } from "react";
import uid from "uid";

const STATES = {
	ACTIVE: 1,
	PAUSED: 2,
	COMPLETED: 3,
};

export const useTodos = () => {
	const [todos, setTodos] = useState([
		{
			id: uid(),
			text: "This is my first todo",
			state: STATES.ACTIVE,
		},
		{
			id: uid(),
			text: "This is my second todo",
			state: STATES.ACTIVE,
		},
		{
			id: uid(),
			text: "This is my third todo",
			state: STATES.ACTIVE,
		},
		{
			id: uid(),
			text: "This is my fourth todo",
			state: STATES.ACTIVE,
		},
		{
			id: uid(),
			text: "This is my fifth todo",
			state: STATES.ACTIVE,
		},

		{
			id: uid(),
			text: "This todo is paused",
			state: STATES.PAUSED,
		},
		{
			id: uid(),
			text: "This todo is also paused",
			state: STATES.PAUSED,
		},
		{
			id: uid(),
			text: "This todo is complete",
			state: STATES.COMPLETED,
		},
		{
			id: uid(),
			text: "This todo is also complete",
			state: STATES.COMPLETED,
		},
		{
			id: uid(),
			text: "Hey, look at that, another completed todo",
			state: STATES.COMPLETED,
		},
	]);

	const pausedTodos = todos.filter((todo) => todo.state === STATES.PAUSED);
	const completedTodos = todos.filter(
		(todo) => todo.state === STATES.COMPLETED
	);
	const activeTodos = todos.filter((todo) => todo.state === STATES.ACTIVE);

	return {
		todos,
		pausedTodos,
		activeTodos,
		completedTodos,
		setTodos,
	};
};
