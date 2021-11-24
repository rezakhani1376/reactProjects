import { createStore } from "redux";



const toggleColor = (currentColor) => {
	if (currentColor === "#b42424")
		currentColor = "#1aacac";
	else currentColor = "#b42424"
	return currentColor;
}

let DUMMY_CARDS = [
	{ id: 1, bgColor: "#1aacac" },
	{ id: 2, bgColor: "#1aacac" },
	{ id: 3, bgColor: "#1aacac" },
	{ id: 4, bgColor: "#1aacac" },
	{ id: 5, bgColor: "#1aacac" },
	{ id: 6, bgColor: "#1aacac" },
	{ id: 7, bgColor: "#1aacac" },
	{ id: 8, bgColor: "#1aacac" },
	{ id: 9, bgColor: "#1aacac" },
	{ id: 10, bgColor: "#1aacac" },
	{ id: 11, bgColor: "#1aacac" },
	{ id: 12, bgColor: "#1aacac" },
	{ id: 13, bgColor: "#1aacac" },
	{ id: 14, bgColor: "#1aacac" },
	{ id: 15, bgColor: "#1aacac" },
	{ id: 16, bgColor: "#1aacac" },
];

const changeBackgroundReducer = (state = DUMMY_CARDS, action) => {
	console.dir(action.type.id);
	if (action.type.id) {
		const NewCards = state.map((card) => {
			if (card.id == action.type.id)
				card.bgColor = toggleColor(card.bgColor);
			return card;
		});
		return NewCards;
	}

	return state;
};
const store = createStore(changeBackgroundReducer);

export default store;
