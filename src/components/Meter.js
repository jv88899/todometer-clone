import React from "react";

const Meter = ({ todos, completedTodos }) => {
	return (
		<div className="w-full h-4">
			<div className="flex bg-purple-700 h-full mt-8 mx-4 rounded-sm">
				{completedTodos.map((todo) => (
					<div
						key={todo.id}
						className="h-4 bg-green-500 flex-grow"
					></div>
				))}
				{/*{todos
					.sort((a, b) => a.status - b.status)
					.map((todo) => {
						if (todo.status === 1) {
							return (
								<div
									key={todo.id}
									className="h-4 bg-green-500 flex-grow"
								>
									{" "}
								</div>
							);
						} else if (todo.status === 2) {
							return (
								<div
									key={todo.id}
									className="h-4 bg-yellow-500 flex-grow"
								></div>
							);
						} else if (todo.status === 3) {
							return (
								<div
									key={todo.id}
									className="h-4 flex-grow"
								></div>
							);
						} else {
							return null;
						}
					})}*/}
			</div>
		</div>
	);
};

export default Meter;
