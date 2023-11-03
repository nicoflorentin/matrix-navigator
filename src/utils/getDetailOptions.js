
const getDetailOptions = async (navigate) => {
	await new Promise(resolve => setTimeout(resolve, 1000))
	const detailOptions = [
		[
			{ id: 0, displayName: "Add to Favs", action: element => alert(`add ${element.name} to favs`) },
			{ id: 1, displayName: "Back", action: () => navigate(`/`) }
		],
	]
	return detailOptions
}

export default getDetailOptions
