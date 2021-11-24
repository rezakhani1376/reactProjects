import { createStore } from "redux";

const toggleColor = (currentColor) => {
	if (currentColor === "#b42424") currentColor = "#1aacac";
	else currentColor = "#b42424";
	return currentColor;
};

let DUMMY_CARDS = [
	// { id: 1, bgColor: "#1aacac" },
	// { id: 2, bgColor: "#1aacac" },
	// { id: 3, bgColor: "#1aacac" },
	// { id: 4, bgColor: "#1aacac" },
	// { id: 5, bgColor: "#1aacac" },
	// { id: 6, bgColor: "#1aacac" },
	// { id: 7, bgColor: "#1aacac" },
	// { id: 8, bgColor: "#1aacac" },
	// { id: 9, bgColor: "#1aacac" },
	// { id: 10, bgColor: "#1aacac" },
	// { id: 11, bgColor: "#1aacac" },
	// { id: 12, bgColor: "#1aacac" },
	// { id: 13, bgColor: "#1aacac" },
	// { id: 14, bgColor: "#1aacac" },
	// { id: 15, bgColor: "#1aacac" },
	// { id: 16, bgColor: "#1aacac" },
];

const createNewDummyCards = (size) => {
	let NEW_DUMMY_CARDS = [];
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			const card = { id: NEW_DUMMY_CARDS.length, bgColor: "#1aacac" };
			NEW_DUMMY_CARDS.push(card);
		}
	}
	return NEW_DUMMY_CARDS;
};

const changeBackgroundReducer = (state = { DUMMY_CARDS, size: 0 }, action) => {
	console.dir(action.type.id);

	if (action.type === "element") {
		const NewCards = state.DUMMY_CARDS.map((card) => {
			if (card.id == action.card.id) card.bgColor = toggleColor(card.bgColor);
			return card;
		});
		return { DUMMY_CARDS: NewCards, size: state.size };
	} 
	
	
	else if (action.type === "size") {
		const NewSize = action.size;
		const NewDummyCards = createNewDummyCards(NewSize);
		console.log(NewDummyCards);
		return { DUMMY_CARDS: NewDummyCards, size: NewSize };
	} 
	
	
	else if (action.type === "removeAll") {
		return { DUMMY_CARDS: [], size: state.size };
	}


	// console.log(state);
	return state;
};
const store = createStore(changeBackgroundReducer);

export default store;
