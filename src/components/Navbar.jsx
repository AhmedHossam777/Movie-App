import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar  bg-dark navbar-dark p-md-3">
			<div className="container-fluid">
				<a className="navbar-brand">
					<b>Movies</b>
				</a>
				<div className="d-flex">
					<Link to="/watchList" className="navlink">
						Watch List
					</Link>
					<Link to="/watched" className="navlink">
						Watched
					</Link>
					<button className="btn btn-outline-success" type="submit">
						Add
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;