import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Recipe from "./pages/Recipe";
import Searchform from "./components/Searchform";

function App() {
	return (
		<Router>
			<Navbar />
			<Wrapper>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/search" element={<Searchform />} />
					<Route path="/recipe/:id" element={<Recipe />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Wrapper>
		</Router>
	);
}

export default App;
