import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Navigation from "../components/Navigation";

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
			)
		).json();
		console.log(json.data.movies);
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	console.log(movies);
	return (
		<>
			<Navigation />
			<div>
				{loading ? (
					<h1>Loading ...</h1>
				) : (
					<div>
						{movies &&
							movies.map((movie) => {
								return (
									<>
										<Movie
											id={movie.id}
											coverImg={movie.medium_cover_image}
											title={movie.title}
											rating={movie.rating}
											year={movie.year}
											genres={movie.genres}
										/>
										<br />
									</>
								);
							})}
					</div>
				)}
			</div>
		</>
	);
}
export default Home;
