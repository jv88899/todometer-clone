import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import CompletedTodo from "./CompletedTodo";
import DateDisplay from "./DateDisplay";
import Meter from "./Meter";
import Nav from "./Nav";
import PausedTodo from "./PausedTodo";
import Todo from "./Todo";

import { useTodos } from "../hooks/useTodos";

import { ReactComponent as ChevronRightIcon } from "../icons/chevron-right.svg";
import { ReactComponent as PlusIcon } from "../icons/plus.svg";

const Dashboard = () => {
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
		setTodos,
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

	const onDragEnd = (result) => {
		// if item is dropped outside of drop zone, do nothing
		if (!result.destination) return;

		// get the starting array index for the item being dragged
		const currentItemStartLocation = result.source.index;

		// get the new array index where the item was dropped
		const currentItemNewLocation = result.destination.index;

		// remove the active item from activeTodos and store in a variable
		const activeItem = activeTodos.splice(currentItemStartLocation, 1);

		// add the active item back to activeTodos in the correct spot
		activeTodos.splice(currentItemNewLocation, 0, ...activeItem);

		// update state with the new array
		setTodos([...activeTodos, ...pausedTodos, ...completedTodos]);
	};
	return (
		<div className="min-h-screen max-h-full w-full bg-purple-900">
			<Nav />
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
					className="h-10 ml-2 w-10/12 pl-2 placeholder-purple-900 text-gray-100 bg-purple-600 focus:outline-none"
					onChange={(e) => setCurrentValue(e.target.value)}
				/>
				<button
					type="submit"
					className="w-2/12 flex justify-center text-gray-100"
				>
					<PlusIcon />
				</button>
			</form>
			<div className="mb-4">
				<div className="flex mx-2 mt-6 h-6 text-gray-100 items-center">
					<ChevronRightIcon />
					<h2 className="text-xl font-semibold">Active</h2>
				</div>
			</div>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="droppable">
					{(provided, snapshot) => (
						<div
							className="mx-4 mt-6"
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{activeTodos.map((todo, index) => (
								<Todo
									key={todo.id}
									todo={todo}
									isEditable={isEditable}
									editTodo={editTodo}
									removeTodo={removeTodo}
									pauseTodo={pauseTodo}
									completeTodo={completeTodo}
									index={index}
								/>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
			{pausedTodos.length > 0 && (
				<div className="mb-4">
					<div className="flex mx-2 mt-6 h-6 text-gray-100 items-center">
						<ChevronRightIcon />
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
						<ChevronRightIcon />
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
};

export default Dashboard;
