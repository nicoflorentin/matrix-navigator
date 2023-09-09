const cards = [
	{
		content: "Nicolás",
		action: function () {
			alert(this.content)
		},
	},
	{
		content: "Nata",
		action: function () {
			alert(this.content)
		},
	},
	{
		content: "Diego",
		action: function () {
			alert(this.content)
		},
	},
	{
		content: "Paula",
		action: function () {
			alert(this.content)
		},
	},
	{
		content: "Yorke",
		action: function () {
			alert(this.content)
		},
	},
	{
		content: "Moreno",
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
