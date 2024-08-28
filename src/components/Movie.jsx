const Movie = (props) => {
	return (
		<div className="card" style="width: 18rem;">
			<h2>{props.title}</h2>
			<img src={props.poster} className="card-img-top" alt="..." />
			<div className="card-body">
				<p className="card-text">{props.year}</p>
			</div>
		</div>
	);
};

export default Movie;