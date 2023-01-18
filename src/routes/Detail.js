import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import Navigation from "../components/Navigation";

function Detail() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState({});
	const getMovie = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
			)
		).json();
		setMovie(json.data.movie);
	};
	console.log(movie);
	useEffect(() => {
		getMovie();
	}, []);
	return (
		<>
			<Navigation />
			<div>
				<Movie
					id={id}
					coverImg={movie.medium_cover_image}
					title={movie.title}
					rating={movie.rating}
					year={movie.year}
					genres={movie.genres}
					summary={movie.description_full}
				/>
			</div>
		</>
	);
}
export default Detail;
