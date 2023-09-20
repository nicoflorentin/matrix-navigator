import Hud from "../hud/Hud"
import Screen from '../screen/Screen'
import LateralButtons from "../lateralButtons/LateralButtons"
import NavigationButtons from "../navigationButtons/NavigationButtons"

const ScreenAndHud = ({ screenMatrix, hudMatrix, focusedElement, focusedOption, loading, move, moveHud }) => {

	return (
		<div
				className="flex justify-center items-center
										select-none h-screen w-screen 
										border border-green-600
										grayscale"
			>
				<div id="" className="flex gap-2 h-[550px] w-[700px] p-3 border border-black rounded-2xl shadow-2xl">
					<div id="screenContainer" className="border rounded-2xl p-10">
						<Screen matrix={screenMatrix} focusedElement={focusedElement} loading={loading} />
					</div>
					<div
						id="rightPanelContainer"
						className="border rounded-2xl h-full w-full flex flex-col items-center justify-end py-12 px-3"
					>
						<Hud
							hudMatrix={hudMatrix}
							focusedOption={focusedOption}
							focusedElement={focusedElement}
							loading={loading}
						/>
						<NavigationButtons move={move} focusedElement={focusedElement} focusedOption={focusedOption} />
					</div>
				</div>
				<LateralButtons moveHud={moveHud} focusedOption={focusedOption} />
			</div>
	)
}

export default ScreenAndHud