const cards = [
	{
		id: 1,
		name: "Alice",
		activity: "Reading a book",
		action: function () {
			alert(`Name: ${this.name}\nActivity: ${this.activity}`);
		},
	},
	{
		id: 2,
		name: "Bob",
		activity: "Playing guitar",
		action: function () {
			alert(`Name: ${this.name}\nActivity: ${this.activity}`);
		},
	},
	{
		id: 3,
		name: "Charlie",
		activity: "Cooking dinner",
		action: function () {
			alert(`Name: ${this.name}\nActivity: ${this.activity}`);
		},
	},
	{
		id: 4,
		name: "David",
		activity: "Running in the park",
		action: function () {
			alert(`Name: ${this.name}\nActivity: ${this.activity}`);
		},
	},
	{
		id: 5,
		name: "Eve",
		activity: "Painting a picture",
		action: function () {
			alert(`Name: ${this.name}\nActivity: ${this.activity}`);
		},
	},
	{
		id: 6,
		name: "Frank",
		activity: "Watching a movie",
		action: function () {
			alert(`Name: ${this.name}\nActivity: ${this.activity}`);
		},
	},
	{
		id: 7,
		name: "Grace",
		activity: "Hiking in the mountains",
		action: function () {
			alert(`Name: ${this.name}\nActivity: ${this.activity}`);
		},
	},
	{
		id: 8,
		name: "Hannah",
		activity: "Playing chess",
		action: function () {
			alert(`Name: ${this.name}\nActivity: ${this.activity}`);
		},
	},
	{
		id: 9,
		name: "Isaac",
		activity: "Working on a computer",
		action: function () {
			alert(`Name: ${this.name}\nActivity: ${this.activity}`);
		},
	},
];

const getCards = async () => {
	await new Promise(resolve => setTimeout(resolve, 1000))
	return cards
}

export default getCards
