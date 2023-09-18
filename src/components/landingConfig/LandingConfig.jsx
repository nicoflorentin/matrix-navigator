import React from 'react'
import { useEffect, useState } from "react"
import createSquareMatrix from "../../utils/createSquareMatrix"
import getCards from '../../utils/getCards'
import useCreateMatrix from "../../hooks/useCreateMatrix"
import { useNavigate } from "react-router-dom"
import getLandingOptions from "../../utils/getLandingOptions"

const LandingConfig = ({Children}) => {

	const [cardMatrix, setCardMatrix] = useState([0, 0])
	const [hudMatrix, setHudMatrix] = useState([0, 0])
	const [focusedOption, moveHud] = useCreateMatrix(hudMatrix)
	const [focusedElement, move] = useCreateMatrix(cardMatrix)
	const [loading, setLoading] = useState(true)

	const navigate = useNavigate()

	useEffect(() => {
		getCards().then(res => {
			setCardMatrix(createSquareMatrix(res))
			setLoading(false)
		})
	}, [])

	useEffect(() => {
		getLandingOptions(navigate).then(res => {
			setHudMatrix(res)
		})
	}, [])

	const config = { cardMatrix, hudMatrix, focusedElement, focusedOption, loading, move, moveHud }

	return (
		<>
		<Children {...config} />
		</>
	)
}

export default LandingConfig