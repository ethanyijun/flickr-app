import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import PhotoDetail from "./components/PhotoDetail/PhotoDetail";
import PhotoList from "./components/PhotoList/PhotoList";

function App() {
	return (
		<div className="container">
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
