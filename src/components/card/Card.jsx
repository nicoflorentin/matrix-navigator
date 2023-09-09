import React from "react"

const Card = ({ card, index, focusedIndex }) => {
	return (
		<div
			className={
								`w-1/4 h-52 m-2
								flex flex-col justify-center
								border border-black rounded-2xl` + (focusedIndex === index ? " bg-red-500" : "")
			}
			key={card.content}
		>
			<p className={`text-center`}>{card.content}</p>
		</div>
	)
}

export default Card
