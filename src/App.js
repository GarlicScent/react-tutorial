import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import { render } from "@testing-library/react";

function Hello() {
	function byeFn() {
		console.log("bye");
	}
	function hiFn() {
		console.log("created :)");
		return byeFn;
	}
	useEffect(hiFn, []);
	return <h1>Hello</h1>;
}

function App() {
	const [showing, setShowing] = useState(false);

	function revertClick() {
		setShowing((prev) => !prev);
	}
	return (
		<div>
			{showing ? <Hello /> : null}
			<button onClick={revertClick}>{showing ? "Hide" : "Show"}</button>
		</div>
	);
}
export default App;
