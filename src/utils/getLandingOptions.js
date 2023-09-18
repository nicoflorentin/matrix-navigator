
const getLandingOptions = async (navigate) => {
	await new Promise(resolve => setTimeout(resolve, 1000))
	const landingOptions = [
		[
			{ id: 0, displayName: "Detail", action: element => navigate(`detail/${element.id}`) },
			{ id: 1, displayName: "Add to Favs", action: element => alert(`add ${element.name} to favs`) },
		],
	]
	return landingOptions
}

export default getLandingOptions
