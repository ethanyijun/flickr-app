import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import PhotoItem from "./components/PhotoItem/PhotoItem";
import PhotoList from "./components/PhotoList/PhotoList";
// import Search from "./components/Search/search";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<PhotoList />} />
				<Route path="/photos/:id" element={<PhotoItem />} />
			</Routes>
		</>
	);
}

export default App;
