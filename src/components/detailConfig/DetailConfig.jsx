import addDataAndOptionsMatrix from "../hoc/addDataAndOptionsMatrix"
import ScreenAndHud from "../screenAndHud/screenAndHud"

const DetailConfig = (props) => {

	return (
		<>
			<ScreenAndHud {...props} />
		</>
	)
}

export default addDataAndOptionsMatrix(DetailConfig, getDetailData, getDetailOptions)
