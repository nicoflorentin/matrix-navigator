import LandingConfig from "./components/landingConfig/LandingConfig"
import ScreenAndHud from "./components/screenAndHud/ScreenAndHud"

function App() {

	return (
		<>
			<LandingConfig Children={ScreenAndHud} />
		</>
	)
}

export default App
