const createSquareMatrix = arr => {
	const length = arr.length
	const n = Math.ceil(Math.sqrt(length)) // Redondear hacia arriba para asegurarse de que la matriz sea cuadrada

	const matrix = []
	let index = 0

	for (let i = 0; i < n; i++) {
		const row = []
		for (let j = 0; j < n; j++) {
			if (index < length) {
				row.push({ ...arr[index], index })
			} else {
				break; // Salir del bucle interno si no quedan elementos en el array
			}
			index++
		}
		matrix.push(row)
	}

	return matrix
}

export default createSquareMatrix
