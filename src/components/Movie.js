import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, rating, year, genres, summary }) {
	return (
		<div>
			<Link to={`/movie/${id}`}>
				<img src={coverImg} alt="movie cover image" />
				<h2>{title}</h2>
			</Link>
			<h4>rating: {rating}</h4>
			<h4>year: {year}</h4>
			<label
				htmlFor="genres"
				style={{
					fontWeight: 600,
					fontSize: 18,
					textDecoration: "underline",
				}}
			>
				Genres
			</label>
			<ul id="genres">
				{genres &&
					genres.map((genre, index) => (
						<li key={`${title.slice(0, 3)}&${genre}&${index}`}>
							{genre}
						</li>
					))}
			</ul>
			<p>
				<strong>{summary ? "Summary:" : null}</strong> {summary}
			</p>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	year: PropTypes.number.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
	summary: PropTypes.string,
};

export default Movie;
