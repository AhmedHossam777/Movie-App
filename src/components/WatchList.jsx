const WatchList = ({ watchList = [] }) => {
	return (
		<div className="container-fluid m-5">
			<div className="row">
				<div className="col">
					<h1>Watch list</h1>
				</div>
				<div className="col">
					<span className="bg-success p-2" style={{ borderRadius: '15px' }}>
						{watchList.length} movie{watchList.length !== 1 ? 's' : ''}
					</span>
				</div>
			</div>
			<div className="row">
				{watchList.map((movie) => (
					<div key={movie.imdbID} className="col-3">
						<div className="card">
							<img src={movie.Poster} className="card-img-top" alt="poster" />
							<div className="card-body">
								<h5 className="card-title">{movie.Title}</h5>
								<p className="card-text">{movie.Year}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default WatchList;