import classes from "./Card.module.css";

const Card = (props) => {
	return (
		<div
			className={classes.card}
			onClick={props.onClick}
			id={props.id}
			style={{ backgroundColor: props.backgroundColor }}
		>
			{props.children}
		</div>
	);
};

export default Card;
