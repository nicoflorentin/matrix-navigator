import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useCreateMatrix from "../../hooks/useCreateMatrix"
import createSquareMatrix from "../../utils/createSquareMatrix"

const addDataAndOptionsMatrix = (Component, getScreenData, getHudData) => {
	const NewComponent = props => {
		const [screenMatrix, setScreenMatrix] = useState([0, 0])
		const [hudMatrix, setHudMatrix] = useState([0, 0])
		const [focusedOption, moveHud] = useCreateMatrix(hudMatrix)
		const [focusedElement, move] = useCreateMatrix(screenMatrix)
		const [loading, setLoading] = useState(true)

		useEffect(() => {
			getScreenData().then(res => {
				setScreenMatrix(createSquareMatrix(res))
				setLoading(false)
			})
		}, [])

		const navigate = useNavigate()
		useEffect(() => {
			getHudData(navigate).then(optionsMatrix => {
				setHudMatrix(optionsMatrix)
			})
		}, [])

		const config = { screenMatrix, hudMatrix, focusedElement, focusedOption, loading, move, moveHud }

		console.log(config)

		return <Component {...config} {...props} />
	}

	return NewComponent
}

export default addDataAndOptionsMatrix
