const SearchedMovies = ({
	movie,
	watchList,
	setWatchList,
	watched,
	setWatched,
}) => {
	const handleAddToWatchList = (movie) => {
		setWatchList([...watchList, movie]);
	};

	const handleAddToWatched = (movie) => {
		setWatched([...watched, movie]);
	};

	return (
		<div className="container-fluid mb-3">
			<div className="row">
				<div className="col">
					<img src={movie.Poster} alt="poster" />
				</div>
				<div className="col">
					<h1>{movie.Title}</h1>
					<p>{movie.Year}</p>
					<p>{movie.Rated}</p>

					<button
						className="btn btn-success m-1"
						onClick={() => handleAddToWatchList(movie)}
					>
						Add to watchlist
					</button>
					<button
						className="btn btn-outline-success m-1"
						onClick={() => handleAddToWatched(movie)}
					>
						Add to watched
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchedMovies;