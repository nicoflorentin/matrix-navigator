import React from "react"

const Card = ({ card, focusedIndex }) => {
	console.log(card)

	return (
		<div
			className={
				`w-28 h-52 m-2
								flex flex-col justify-center
								border border-black rounded-2xl` + (focusedIndex === card.index ? " bg-red-500" : "")
			}
			key={card.content}
		>
			<p className={`text-center`}>{card.content}</p>
		</div>
	)
}

export default Card
