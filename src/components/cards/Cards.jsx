import React from "react"
import Card from "../card/Card"

const Cards = ({ matrix, focusedElement, loading }) => {

	let id = 0

	return (
		<div className="flex justify-center items-center">
			{loading ? (
				"..."
			) : (
				<div>
					{matrix.map(row => (
						<div key={id++} className="flex">
							{row.map(element => (
								<Card key={id++} card={element} focusedIndex={focusedElement.index}></Card>
							))}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Cards
