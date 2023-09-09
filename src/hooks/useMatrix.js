import { useEffect, useState } from "react"

const useMatrix = matrix => {
	// console.log("usematrix")
	const [coordinates, setCoordinates] = useState({ row: 0, col: 0 })
	const [focusedElement, setFocusedElement] = useState({})

	const dimensions = { numRows: matrix.length, numCols: matrix[0].length }

	const move = direction => {
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
				// Handle invalid direction
				console.log("Invalid direction")
				return
		}

		// Check if the next position is within the bounds of the matrix
		if (row >= 0 && row < dimensions.numRows - 1 && col >= 0 && col < dimensions.numCols) {
			setCoordinates({ row, col })
			setFocusedElement(matrix[row][col])
		} else {
			// Handle going out of bounds
			console.log("Out of bounds")
		}
	}

	useEffect(() => {
		setFocusedElement(matrix[coordinates.row][coordinates.col])
	}, [matrix, coordinates])

	return [coordinates, focusedElement, move]
}

export default useMatrix
