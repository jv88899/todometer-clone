import React from "react";
import moment from "moment";

const Date = () => {
	const todaysDate = moment();
	return (
		<div className="flex justify-between h-16 text-gray-100 mx-4 pt-4">
			<div className="flex">
				<span className="h-16 flex justify-center items-center text-5xl mr-2">
					<p>{todaysDate.format("D")}</p>
				</span>
				<div className="h-16 flex flex-col justify-center">
					<span>{todaysDate.format("MMM")}</span>
					<span>{todaysDate.format("yyyy")}</span>
				</div>
			</div>
			<div className="h-16 flex justify-center items-center">
				<p>{todaysDate.format("dddd")}</p>
			</div>
		</div>
	);
};

export default Date;
