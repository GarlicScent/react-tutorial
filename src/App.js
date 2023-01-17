import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
	const [counter, setCounter] = useState(0);
	const [keyword, setKeyword] = useState("");
	const onClick = () => setCounter((prev) => prev + 1);
	const onChange = (event) => setKeyword(event.target.value);

	useEffect(() => console.log("call the counter"), [counter]);
	useEffect(() => {
		if (keyword !== "" && keyword.length > 4)
			console.log("Search for: ", keyword);
	}, [keyword]);
	return (
		<div>
			<input
				onChange={onChange}
				type="text"
				placeholder="Search here..."
			/>

			<h1 className={styles.title}>{counter}</h1>
			<button onClick={onClick}>Click me</button>
		</div>
	);
}
export default App;
