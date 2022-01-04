import React from "react";

import "./BarAmount.css";
const BarAmount = ({ barIndex, text, barHeight }) => {
	return (
		<text
			className='text'
			x={barIndex * 34 + 10}
			y={350 - barHeight - 20}
			dy='.15em'
		>
			{text}
		</text>
	);
};

export default BarAmount;
