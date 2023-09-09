import { useEffect, useState } from "react"
import getCards from "./utils/getCards"
import Card from "./components/card/Card"
import NavigationButtons from "./components/navigationButtons/NavigationButtons"
import createSquareMatrix from "./utils/createSquareMatrix"
import useMatrix from "./hooks/useMatrix"

function App() {
	const [matrix, setMatrix] = useState([0, 0])
	const [coordinates, focusedElement, move] = useMatrix(matrix)
	const [loading, setLoading] = useState(true)

	console.log(matrix)

	useEffect(() => {
		getCards().then(res => {
			setMatrix(createSquareMatrix(res))
			setLoading(false)
		})
	}, [])

	return (
		<div className="select-none flex flex-col justify-center items-center h-screen w-screen border border-green-600">
			<NavigationButtons move={move} focusedElement={focusedElement}></NavigationButtons>
			<div
				className="flex justify-center
									border border-black w-[900px]"
			>
				{loading ? "loading" : <div>
					{matrix.map( row => <div className="flex">{row.map(element => <Card card={element} focusedIndex={focusedElement.index}></Card>)}</div>)}
					</div>}
			</div>
		</div>
	)
}

export default App
