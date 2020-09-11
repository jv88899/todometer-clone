// Started at 43 lines
import React from "react";

const getClassName = (status) => {
	if (status === 1) return "h-4 bg-green-500 flex-grow";
	if (status === 2) return "h-4 bg-yellow-500 flex-grow";
	if (status === 3) return "h-4 flex-grow";
	return null;
};
const Meter = ({ todos }) => {
	return (
		<div className="w-full h-4">
			<div className="flex bg-purple-700 h-full mt-8 mx-4 rounded-sm">
				{todos
					.sort((a, b) => a.status - b.status)
					.map((todo) => {
						const className = getClassName(todo.status);
						if (!className) return null;

						return <div key={todo.text} className={className} />;
					})}
			</div>
		</div>
	);
};

export default Meter;
