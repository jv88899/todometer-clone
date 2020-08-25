import React from "react";

function App() {
	return (
		<div className="min-h-screen max-h-full w-full bg-purple-900">
			<div className="flex justify-between h-16 text-gray-100 mx-4 pt-4">
				<div className="flex">
					<span className="h-16 flex justify-center items-center text-5xl mr-2">
						<p>2</p>
					</span>
					<div className="h-16 flex flex-col justify-center">
						<span>Mar</span>
						<span>2020</span>
					</div>
				</div>
				<div className="h-16 flex justify-center items-center">
					<p>Monday</p>
				</div>
			</div>
		</div>
	);
}

export default App;
