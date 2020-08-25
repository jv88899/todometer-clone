import React from "react";
import Date from "./components/Date";

function App() {
	return (
		<div className="min-h-screen max-h-full w-full bg-purple-900">
			<Date />
			<div className="w-full h-4">
				<div className="flex bg-purple-700 h-full mt-8 mx-4 rounded-sm"></div>
			</div>
		</div>
	);
}

export default App;
