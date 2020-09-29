import React from "react";

const getClassName = (state) => {
	if (state === 1) return "h-4 flex-grow";
	if (state === 2) return "h-4 bg-yellow-500 flex-grow";
	if (state === 3) return "h-4 bg-green-500 flex-grow";
};

const Meter = ({ todos }) => {
	return (
		<div className="w-full h-4">
			<div className="flex bg-purple-700 h-full mt-8 mx-4 rounded-sm">
				{todos
					.sort((a, b) => b.state - a.state)
					.map((todo) => {
						const className = getClassName(todo.state);
						if (!className) return null;

						return <div key={todo.text} className={className} />;
					})}
			</div>
		</div>
	);
};

export default Meter;
