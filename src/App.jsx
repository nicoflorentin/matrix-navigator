import { useEffect, useState } from "react"
import getCards from "./utils/getCards"
import Card from "./components/card/Card"
import NavigationButtons from "./components/navigationButtons/NavigationButtons"

function App() {
	const [focusedIndex, setFocusedIndex] = useState(0)
	const [cards, setCards] = useState([])

	const dimensions = { rows: 2, columns: 3 }

	useEffect(() => {
		console.log("loading")
		getCards().then(res => {
			console.log("loaded")
			setCards(res)
		})
	}, [])

	return (
		<div className="select-none flex flex-col justify-center items-center h-screen w-screen border border-green-600">
			<p>Focused Index : {focusedIndex}</p>
			<NavigationButtons
				cards={cards}
				focusedIndex={focusedIndex}
				setFocusedIndex={setFocusedIndex}
				dimensions={dimensions}
			></NavigationButtons>
			<div
				className="flex flex-wrap justify-center
									border border-black w-[900px]"
			>
				{cards.length
					? cards.map((card, index) => (
							<Card
								focusedIndex={focusedIndex}
								card={card}
								index={index}
								key={index}
							></Card>
					  ))
					: "loading..."}
			</div>
		</div>
	)
}

export default App
