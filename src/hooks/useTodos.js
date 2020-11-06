import { useState } from "react";
import { firestore } from "../firebase/config";
import { useAuth, AuthProvider } from "../contexts/AuthContext";
import uid from "uid";

export const STATES = {
	ACTIVE: 1,
	PAUSED: 2,
	COMPLETED: 3,
};

export const useTodos = () => {
	// const [todos, setTodos] = useState([
	// 	{
	// 		id: uid(),
	// 		text: "This is my first todo",
	// 		state: STATES.ACTIVE,
	// 	},
	// 	{
	// 		id: uid(),
	// 		text: "This is my second todo",
	// 		state: STATES.ACTIVE,
	// 	},
	// 	{
	// 		id: uid(),
	// 		text: "This is my third todo",
	// 		state: STATES.ACTIVE,
	// 	},
	// 	{
	// 		id: uid(),
	// 		text: "This is my fourth todo",
	// 		state: STATES.ACTIVE,
	// 	},
	// 	{
	// 		id: uid(),
	// 		text: "This is my fifth todo",
	// 		state: STATES.ACTIVE,
	// 	},

	// 	{
	// 		id: uid(),
	// 		text: "This todo is paused",
	// 		state: STATES.PAUSED,
	// 	},
	// 	{
	// 		id: uid(),
	// 		text: "This todo is also paused",
	// 		state: STATES.PAUSED,
	// 	},
	// 	{
	// 		id: uid(),
	// 		text: "This todo is complete",
	// 		state: STATES.COMPLETED,
	// 	},
	// 	{
	// 		id: uid(),
	// 		text: "This todo is also complete",
	// 		state: STATES.COMPLETED,
	// 	},
	// 	{
	// 		id: uid(),
	// 		text: "Hey, look at that, another completed todo",
	// 		state: STATES.COMPLETED,
	// 	},
	// ]);
	const [todos, setTodos] = useState([]);

	const { currentUser } = useAuth();

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

	const updateTodos = (newTodos) => {
		const ref = firestore.collection("users").doc(currentUser.uid);
		ref.update({ todos: newTodos });
	};

	const getTodos = () => {
		const ref = firestore.collection("users").doc(currentUser.uid);
		ref.get()
			.then((doc) => {
				setTodos(doc.data().todos);
			})
			.catch((error) => {
				console.log("error getting document", error);
			});
	};

	const resetTodos = () => setTodos([]);

	// const createTodo = (text) => {
	// 	setTodos((prev) => [
	// 		...prev,
	// 		{ id: uid(), state: STATES.ACTIVE, text },
	// 	]);
	// };

	const createTodo = (text) => {
		// console.log("state", todos);
		// const ref = firestore.collection("users");
		// ref.doc(currentUser.uid).set({
		// 	todos: [...todos, { id: uid(), state: STATES.ACTIVE, text }],
		// });
		// setTodos((prev) => [
		// 	...prev,
		// 	{ id: uid(), state: STATES.ACTIVE, text },
		// ]);
		// const ref = firestore.collection("users");
		// ref.doc(currentUser.uid)
		// 	.set({
		// 		todos: [...todos, { id: uid(), state: STATES.ACTIVE, text }],
		// 	})
		// 	.then(() => {
		// 		ref.doc(currentUser.uid)
		// 			.get()
		// 			.then((doc) => {
		// 				setTodos(doc.data().todos);
		// 			});
		// 	});
		const ref = firestore.collection("users").doc(currentUser.uid);
		const setWithMerge = ref.set(
			{
				todos: [...todos, { id: uid(), state: STATES.ACTIVE, text }],
			},
			{ merge: true }
		);
		// .then(() => getTodos());
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
		getTodos,
		updateTodos,
	};
};
