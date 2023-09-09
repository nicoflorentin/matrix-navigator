import React from "react"

const NavigationButtons = ({ cards, setFocusedIndex, dimensions, focusedIndex }) => {
	const { rows, columns } = dimensions

	const handleNavigate = dir => {
		switch (dir) {
			case "up":
				setFocusedIndex(prev => (prev - columns < 0 ? prev + rows * columns - columns : prev - columns))
				break
			case "down":
				setFocusedIndex(prev => (prev + columns >= rows * columns ? prev - rows * columns + columns : prev + columns))
				break
			case "left":
				setFocusedIndex(prev => (prev % columns === 0 ? prev + columns - 1 : prev - 1))
				break
			case "right":
				setFocusedIndex(prev => (prev % columns === columns - 1 ? prev - columns + 1 : prev + 1))
				break
			default:
				break
		}
	}

	return (
		<div className="">
			<button className="" onClick={() => handleNavigate("up")}>
				🔼
			</button>
			<br />
			<button onClick={() => handleNavigate("left")}>◀</button>
			<button onClick={() => handleNavigate("down")}>🔽</button>
			<button onClick={() => handleNavigate("right")}>▶</button>
			<br />
			<button className="bg-black text-white px-5 py-1 rounded-xl m-2" onClick={() => cards[focusedIndex].action()}>
				EXECUTE
			</button>
		</div>
	)
}

export default NavigationButtons
