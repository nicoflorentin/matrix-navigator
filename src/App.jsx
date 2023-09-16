import { useEffect, useState } from "react"
import getCards from "./utils/getCards"
import NavigationButtons from "./components/navigationButtons/NavigationButtons"
import createSquareMatrix from "./utils/createSquareMatrix"
import useCreateMatrix from "./hooks/useCreateMatrix"
import Screen from "./components/screen/Screen"
import Hud from "./components/hud/Hud"
import LateralButtons from "./components/lateralButtons/LateralButtons"
import { Route, Routes } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function App() {
	const [cardMatrix, setCardMatrix] = useState([0, 0])
	const [hudMatrix, setHudMatrix] = useState([0, 0])
	const [focusedOption, moveHud] = useCreateMatrix(hudMatrix)
	const [focusedElement, move] = useCreateMatrix(cardMatrix)
	const [loading, setLoading] = useState(true)
	
	const navigate = useNavigate()
	const optionsMatrix = [
		[
			{ id: 0, displayName: "Detail", action: element => navigate(`detail/${element.id}`) },
			{ id: 1, displayName: "Add to Favs", action: element => alert(`add ${element.name} to favs`) },
		],
	]
	
	useEffect(() => {
		getCards().then(res => {
			setCardMatrix(createSquareMatrix(res))
			setLoading(false)
		})
	}, [])

	useEffect(() => {
		setHudMatrix(optionsMatrix)
	}, [])

	return (
		<>
			<div
				className="flex justify-center items-center
										select-none h-screen w-screen 
										border border-green-600
										grayscale"
			>
				<div id="interface" className="flex gap-2 h-[550px] w-[700px] p-3 border border-black rounded-2xl shadow-2xl">
					<div id="screenContainer" className="border rounded-2xl p-10">
						<Screen matrix={cardMatrix} focusedElement={focusedElement} loading={loading} />
					</div>
					<div
						id="rightPanelContainer"
						className="border rounded-2xl h-full w-full flex flex-col items-center justify-end py-12 px-3"
					>
						<Hud
							optionsMatrix={optionsMatrix}
							focusedOption={focusedOption}
							focusedElement={focusedElement}
							loading={loading}
						/>
						<NavigationButtons move={move} focusedElement={focusedElement} focusedOption={focusedOption} />
					</div>
				</div>
				<LateralButtons moveHud={moveHud} focusedOption={focusedOption} />
			</div>
		</>
	)
}

export default App
