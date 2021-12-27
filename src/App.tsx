import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./App.css";
import PhotoItem from "./components/PhotoItem/PhotoItem";
import PhotoList from "./components/PhotoList/PhotoList";

function App() {
	return (
		<div className="container">
			<Router>
				<Routes>
					<Route path="/" element={<PhotoList />} />
					<Route path="/photos/:id" element={<PhotoItem />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
