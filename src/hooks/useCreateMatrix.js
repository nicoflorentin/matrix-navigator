import { useState } from "react"

const useCreateMatrix = matrix => {

	const [coordinates, setCoordinates] = useState({ row: 0, col: 0 })
	const dimensions = { numRows: matrix.length, numCols: matrix[0].length }
	const focusedElement = matrix[coordinates.row][coordinates.col]

	const move = direction => {
		//row y col son variables internas de la funcion, antes de cambiar el estado de las coordenadas
		//crea nuevas variables asi puede checkear luego si son validas para la aplicacion
		let { row, col } = coordinates
		switch (direction) {
			case "up":
				row--
				break
			case "down":
				row++
				break
			case "left":
				col--
				break
			case "right":
				col++
				break
			default:
				console.log("Invalid direction")
				return
		}

		if (row >= 0 && row < dimensions.numRows && col >= 0 && col < dimensions.numCols && matrix[row][col]) {
			setCoordinates({ row, col })
			return
		} else {
			console.log("Out of range")
		}
	}

	return [focusedElement, move]
}

export default useCreateMatrix

