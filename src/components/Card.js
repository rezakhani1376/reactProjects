import classes from "./Card.module.css";

const Card = (props) => {
	return (
		<div
			className={classes.card}
			onClick={props.onClick}
			id={props.id}
			style={{
				backgroundColor: props.backgroundColor,
				width: "100px",
				height: "100px",
			}}
		>
			{props.children}
		</div>
	);
};

export default Card;
