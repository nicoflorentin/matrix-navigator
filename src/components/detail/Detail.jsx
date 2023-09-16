import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

const Detail = ({ focusedElement }) => {
	console.log(focusedElement)

	return (
		<div>
			<p>{focusedElement.name}</p>
			<p>{focusedElement.activity}</p>
		</div>
	)
}

export default Detail
