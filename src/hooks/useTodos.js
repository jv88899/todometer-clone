import { useState, useMemo, useEffect } from "react";
import { firestore } from "../firebase/config";
import { useAuth } from "../contexts/AuthContext";
import uid from "uid";

export const STATES = {
	ACTIVE: 1,
	PAUSED: 2,
	COMPLETED: 3,
};

export const useTodos = () => {
	const [todos, setTodos] = useState([]);

	const { currentUser } = useAuth();

	const userDoc = useMemo(() => {
		if (!currentUser) return null;
		return firestore.collection("users").doc(currentUser.uid);
	}, [currentUser]);

	const pausedTodos = todos.filter((todo) => todo.state === STATES.PAUSED);

	useEffect(() => {
		getTodos();
	}, []);

	const completedTodos = todos.filter(
		(todo) => todo.state === STATES.COMPLETED
	);

	const activeTodos = todos.filter((todo) => todo.state === STATES.ACTIVE);

	const removeTodo = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		updateFirestoreTodos(newTodos);
	};

	const updateFirestoreTodos = (todos) => {
		userDoc.set({ todos }, { merge: true });
	};

	const changeStateOfTodo = (todo, newState) => {
		const updatedTodos = todos.map((t) => {
			if (t !== todo) return t;
			return { ...t, state: newState };
		});
		updateFirestoreTodos(updatedTodos);
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
		userDoc.update({ todos: newTodos });
	};

	const getTodos = () => {
		userDoc.onSnapshot((doc) => {
			console.log("CHANGE HAPPENED");
			setTodos(doc.data().todos);
		});
	};

	const resetTodos = () => {
		updateFirestoreTodos([]);
	};

	const createTodo = (text) => {
		const updatedTodos = [
			...todos,
			{ id: uid(), state: STATES.ACTIVE, text },
		];
		updateFirestoreTodos(updatedTodos);
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
