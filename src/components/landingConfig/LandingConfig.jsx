import React from "react"
import { useEffect, useState } from "react"
import createSquareMatrix from "../../utils/createSquareMatrix"
import getCards from "../../utils/getCards"
import useCreateMatrix from "../../hooks/useCreateMatrix"
import { useNavigate } from "react-router-dom"
import getLandingOptions from "../../utils/getLandingOptions"
import addDataAndOptionsMatrix from "../hoc/addDataAndOptionsMatrix"
import ScreenAndHud from "../screenAndHud/ScreenAndHud"

const LandingConfig = (props) => {

	return (
		<>
			<ScreenAndHud {...props} />
		</>
	)
}

export default addDataAndOptionsMatrix(LandingConfig, getCards, getLandingOptions)
