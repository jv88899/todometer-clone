import React from "react";

const Meter = ({ todos, pausedTodos, completedTodos }) => {
	return (
		<div className="w-full h-4">
			<div className="flex bg-purple-700 h-full mt-8 mx-4 rounded-sm">
				{completedTodos.map((todo) => (
					<div
						key={todo.id}
						className="h-4 bg-green-500 flex-grow"
					></div>
				))}
				{pausedTodos.map((todo) => (
					<div
						key={todo.id}
						className="h-4 bg-yellow-500 flex-grow"
					></div>
				))}
				{todos.map((todo) => (
					<div key={todo.id} className="h-4 flex-grow"></div>
				))}
			</div>
		</div>
	);
};

export default Meter;
