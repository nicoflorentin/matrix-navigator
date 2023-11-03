import getLandingData from "../../utils/getCards"
import getLandingOptions from "../../utils/getLandingOptions"
import addDataAndOptionsMatrix from "../hoc/addDataAndOptionsMatrix"
import ScreenAndHud from "../screenAndHud/ScreenAndHud"

const DetailConfig = (props) => {

	return (
		<>
			<ScreenAndHud {...props} />
		</>
	)
}

export default addDataAndOptionsMatrix(DetailConfig, getDetailData, getDetailOptions)
