import classes from "./BackgroundCard.module.css";

const BackgroundCard = (props) => {
	return <div className={classes["bg-card"]}>{props.children}</div>;
};

export default BackgroundCard;
