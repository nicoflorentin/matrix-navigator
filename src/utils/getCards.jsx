const cards = [
	{
		content: "card 1",
		action: function () {
			alert(this.content)
		},
	},
	{
		content: "card 2",
		action: function () {
			alert(this.content)
		},
	},
	{
		content: "card 3",
		action: function () {
			alert(this.content)
		},
	},
	{
		content: "card 4",
		action: function () {
			alert(this.content)
		},
	},
	{
		content: "card 5",
		action: function () {
			alert(this.content)
		},
	},
	{
		content: "card 6",
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
