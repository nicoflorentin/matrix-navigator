import React from "react"

const NavigationButtons = ({ move, focusedElement }) => {
	return (
		<div className="">
			<button onClick={() => move("up")}>🔼</button>
			<button onClick={() => move("left")}>◀</button>
			<button onClick={() => move("down")}>🔽</button>
			<button onClick={() => move("right")}>▶</button>
			<button className="bg-black text-white px-5 py-1 rounded-xl m-2" onClick={() => focusedElement.action()}>
				EXECUTE
			</button>
		</div>
	)
}

export default NavigationButtons
