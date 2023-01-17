import { useState } from "react";

function App() {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);
	const onChange = (event) => setTodo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if (todo === "") {
			return;
		}
		setTodo("");
		setTodos((currentArray) => [todo, ...currentArray]);
	};
	console.log(todo, todos);
	return (
		<div>
			<h1>My To Dos</h1>
			<h4>(left todos: {todos.length})</h4>
			<form onSubmit={onSubmit}>
				<input
					value={todo}
					onChange={onChange}
					type="text"
					placeholder="Write your to do..."
				/>
				<button type="submit">Add To Do</button>
			</form>
			<hr />
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo.toUpperCase()}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
