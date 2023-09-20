import React from "react"
import Cards from "../cards/Cards"
import { Route, Routes } from "react-router-dom"
import Detail from "../detail/Detail"

const Screen = ({ matrix, focusedElement, loading }) => {

	return (
		<div className="flex justify-center items-center h-full w-[400px]">
			<Routes>
				<Route path="/" element={<Cards matrix={matrix} focusedElement={focusedElement} loading={loading} />} /> 
				<Route path="/detail/:id" element={<Detail focusedElement={focusedElement} />} />
				
			</Routes>
		</div>
	)
}

export default Screen
