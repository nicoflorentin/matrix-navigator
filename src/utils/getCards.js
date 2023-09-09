const cards = [
	{
		content: "Uno",
		action: function () {
			alert(this.content)
		},
	},
	{
		content: "Dos",
		action: function () {
			alert(this.content)
		},
	},
	{
		content: "Tres",
		action: function () {
			alert(this.content)
		},
	},
	{
		content: "Cuatro",
		action: function () {
			alert(this.content)
		},
	},
	{
		content: "Cinco",
		action: function () {
			alert(this.content)
		},
	},
	{
		content: "Seis",
		action: function () {
			alert(this.content)
		},
	},
]

const getCards = async () => {
	const response = await new Promise(resolve => {
		setTimeout(() => {
			resolve(cards)
		}, 1000)
	})

	return response
}

export default getCards
