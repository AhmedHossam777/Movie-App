import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Watched from './components/Watched';
import WatchList from './components/WatchList';
import { Route, Routes } from 'react-router-dom';

function App() {
	const [watchList, setWatchList] = useState([]);
	const [watched, setWatched] = useState([]);

	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<Search
							watchList={watchList}
							setWatchList={setWatchList}
							watched={watched}
							setWatched={setWatched}
						/>
					}
				/>
				<Route path="watchList" element={<WatchList watchList={watchList} />} />
				<Route path="watched" element={<Watched watched={watched} />} />
			</Routes>
		</div>
	);
}

export default App;