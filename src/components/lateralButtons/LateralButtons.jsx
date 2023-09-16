import React from "react"

const LateralButtons = ({ moveHud }) => {

	return (
		<div className="flex flex-col relative bottom-40 child:h-5 child:w-4">
			<button onClick={() => moveHud('left')}>🔼</button>
			<button onClick={() => moveHud('right')}>🔽</button>
		</div>
	)
}

export default LateralButtons
