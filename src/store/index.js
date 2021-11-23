import { createStore } from "redux";

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
	const cardId = +action.type.id;
	if (cardId) {
		const NewCards = state.map((card) => {
			if (card.id === cardId) {
				card.bgColor = "#b42424";
			}
			return card;
		});

		return NewCards;
	}

	return state;
};
const store = createStore(changeBackgroundReducer);

export default store;
