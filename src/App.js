import Card from "./components/Card";
import BackgroundCard from "./components/BackgroundCard";
import { useSelector, useDispatch } from "react-redux";

function App() {
	const cards = useSelector((state) => state);
	// console.log(cards);

	const dispatch = useDispatch();
	const clickHandler = (event) => {
		dispatch({ type: event.target });
	};

	return (
		<BackgroundCard>
			{cards.map((card) => {
				return (
					<Card
						key={card.id}
						id={card.id}
						backgroundColor={card.bgColor}
						onClick={clickHandler}
					/>
				);
			})}
		</BackgroundCard>
	);
}

export default App;
