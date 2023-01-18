import { Link } from "react-router-dom";

function Navigation() {
	const liStyle = {
		listStyle: "none",
		marginRight: "10px",
	};
	return (
		<nav>
			<ul
				style={{
					display: "flex",
					justifyContent: "flex-start",
					padding: 10,
				}}
			>
				<Link to="/">
					<li key="home" style={liStyle}>
						<h2>Home</h2>
					</li>
				</Link>
				<Link to="/movie/48017">
					<li key="home" style={liStyle}>
						<h2>Detail</h2>
					</li>
				</Link>
			</ul>
		</nav>
	);
}
export default Navigation;
