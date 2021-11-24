import Card from "./components/Card";
import BackgroundCard from "./components/BackgroundCard";
import { useSelector, useDispatch } from "react-redux";
import Input from "./components/Input";

const generateKey = () => {
	const key = Math.random();
	console.log(key);
	return key;
};

function App() {
	const cards = useSelector((state) => state.DUMMY_CARDS);
	const size = useSelector((state) => state.size);

	const dispatch = useDispatch();
	const clickHandler = (event) => {
		dispatch({ type: "element", card: event.target });
	};
	const changeSizeHandler = (n) => {
		dispatch({ type: "removeAll" });
		dispatch({ type: "size", size: n });
	};
	const renderTable = (cards, n) => {
		let NewCardsElements = [];
		let temp = 0;
		for (let i = 0; i < n; i++) {
			// cardsInOneRow[i] = <div></div>;
			let row = [];
			// console.log(cardsInOneRow[i]);
			for (let j = 0; j < n; j++) {
				row.push(
					<Card
						key={cards[temp].id}
						id={cards[temp].id}
						backgroundColor={cards[temp].bgColor}
						onClick={clickHandler}
					/>
				);
				temp++;
			}
			NewCardsElements.push(row);
		}
		return NewCardsElements;
	};

	return (
		<>
			<Input changeSizeTable={changeSizeHandler} />
			<BackgroundCard>
				{renderTable(cards, size).map((row) => {
					return (
						<div key={row[0].key} style={{ display: "flex" }}>
							{row.map((card) => card)}
						</div>
					);
				})}
			</BackgroundCard>
		</>
	);
}

export default App;
