import React from "react"

const NavigationButtons = ({ move, focusedOption, focusedElement }) => {

	console.log(focusedOption)

	return (
		<>
			<div className="child:text-2xl">
				<span>🟦</span>
				<button onClick={() => move("up")}>🔼</button>
				<span>🟦</span>
				<br />
				<button onClick={() => move("left")}>◀</button>
				<button onClick={() => move("down")}>🔽</button>
				<button onClick={() => move("right")}>▶</button>
			</div>
			<div>
				<button
					className="px-4 py-2 m-2
									bg-black rounded-xl
	 									font-bold text-white
										hover:bg-red-500"
					onClick={() => focusedOption.action(focusedElement)}
				>
					EXECUTE
				</button>
			</div>
		</>
	)
}

export default NavigationButtons
