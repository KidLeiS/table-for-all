import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import History from "./pages/History";
import About from "./pages/About";
import "./App.css";
import Recipe from "./pages/Recipe";

function App() {
	return (
		<Router>
			<Navbar />
			<Wrapper>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/recipe/:id" element={<Recipe />} />
					<Route path="/history" element={<History />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Wrapper>
		</Router>
	);
}

export default App;
