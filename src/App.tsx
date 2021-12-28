import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import PhotoDetail from "./components/PhotoDetail/PhotoDetail";
import PhotoList from "./components/PhotoList/PhotoList";
import Search from "./components/Search/search";

function App() {
	return (
		<div className="container">
			<Header />
			<Search />
			<Router>
				<Routes>
					<Route path="/" element={<PhotoList />} />
					<Route path="/photos/:id" element={<PhotoDetail />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
