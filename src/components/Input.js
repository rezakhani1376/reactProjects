import classes from "./Input.module.css";
import { useRef } from "react";

const Input = (props) => {
	const numberInputRef = useRef();

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		const enteredNumber = numberInputRef.current.value;
		console.log(enteredNumber);
		props.changeSizeTable(+enteredNumber);
		console.log(props.inputHandler);
	};

	return (
		<form onSubmit={formSubmissionHandler}>
			<section className={classes["form-control"]}>
				<label htmlFor="user-number">Please Enter Your Number</label>
				<input ref={numberInputRef} id="number" type="number"></input>
			</section>

			<section className={classes["form-actions"]}>
				<button>Submit</button>
			</section>
		</form>
	);
};

export default Input;
