import React from "react"

const NavigationButtons = ({ move, focusedElement }) => {

	return (
		<div className="">
			<button className="" onClick={() => move("up")}>
				🔼
			</button>
			<br />
			<button onClick={() => move("left")}>◀</button>
			<button onClick={() => move("down")}>🔽</button>
			<button onClick={() => move("right")}>▶</button>
			<br />
			<button className="bg-black text-white px-5 py-1 rounded-xl m-2" onClick={() => focusedElement.action()}>
				EXECUTE
			</button>
		</div>
	)
}

export default NavigationButtons
