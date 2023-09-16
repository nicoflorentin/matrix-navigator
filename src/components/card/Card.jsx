import React from "react"

const Card = ({ card, focusedIndex }) => {

	const activeCardStyle = "-translate-y-1 scale-110  duration-200 bg-blue-600 shadow-xl text-white"
	const inactiveCardStyle = 'bg-neutral-300 shadow-md'

	return (
		<div
			className={
				`transition ease-in-out w-28 h-28 m-2
								flex flex-col justify-center
								border rounded-2xl` + ' ' + (focusedIndex === card.index ? activeCardStyle : inactiveCardStyle)
			}
			key={card.content}
		>
			<p className={`text-center`}>{card.name}</p>
		</div>
	)
}

export default Card
