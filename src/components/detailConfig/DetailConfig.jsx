import addDataAndOptionsMatrix from "../hoc/addDataAndOptionsMatrix"

const DetailConfig = (props) => {

	return (
		<>
			<ScreenAndHud {...props} />
		</>
	)
}

export default addDataAndOptionsMatrix(DetailConfig, getDetailData, getDetailOptions)
