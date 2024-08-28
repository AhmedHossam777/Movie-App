import { useState } from 'react';
import SearchedMovies from './SearchedMovie';
import axios from 'axios';

const Search = ({ watchList, setWatchList, watched, setWatched }) => {
	const [query, setQuery] = useState('');
	const [movies, setMovies] = useState([]);

	const handleInputChange = async (e) => {
		const searchQuery = e.target.value;
		setQuery(searchQuery);

		if (searchQuery.length > 2) {
			const API_KEY = '90f3ef6';
			try {
				const response = await axios.get(
					`http://www.omdbapi.com/?s=${encodeURIComponent(searchQuery)}&apikey=90f3ef6`,
				);
				setMovies(response.data.Search || []);
			} catch (error) {
				console.error('Error fetching movies:', error);
				setMovies([]);
			}
		} else {
			setMovies([]);
		}
	};

	return (
		<div className="container m-5">
			<div className="row justify-content-center align-items-center">
				<input
					type="text"
					className="search-input col"
					value={query}
					onChange={handleInputChange}
					placeholder="Search for a movie..."
				/>
			</div>
			<div className="row mt-4">
				{movies.map((movie) => (
					<SearchedMovies
						key={movie.imdbID}
						movie={movie}
						watchList={watchList}
						setWatchList={setWatchList}
						watched={watched}
						setWatched={setWatched}
					/>
				))}
			</div>
		</div>
	);
};

export default Search;