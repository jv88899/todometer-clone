import { useState } from "react";
import uid from "uid";

export const STATES = {
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

	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const changeStateOfTodo = (todo, newState) => {
		setTodos((prev) =>
			prev.map((t) => {
				if (t !== todo) return t;
				return { ...t, state: newState };
			})
		);
	};

	const pauseTodo = (todo) => {
		const isPaused = todo.state === STATES.PAUSED;
		const newState = isPaused ? STATES.ACTIVE : STATES.PAUSED;
		changeStateOfTodo(todo, newState);
	};

	const completeTodo = (todo) => {
		changeStateOfTodo(todo, STATES.COMPLETED);
	};

	const resetTodos = () => setTodos([]);

	const createTodo = (text) => {
		setTodos((prev) => [
			...prev,
			{ id: uid(), state: STATES.ACTIVE, text },
		]);
	};

	return {
		// TODO Arrays
		activeTodos, // Todos where state is ACTIVE
		pausedTodos, // Todos where state is PAUSED
		completedTodos, // Todos where state is COMPLETED
		todos, // All Todos

		resetActive: todos.length === 0,
		// CRUD Operations
		createTodo,
		pauseTodo,
		completeTodo,
		removeTodo,
		resetTodos,
		setTodos,
	};
};
