import { Routes, Route, Router, useLocation } from "react-router-dom";
import Recipe from "./Recipe";
import SearchResults from "./SearchResults";
import Home from "./Home";

const Pages = () => {
	// const location = useLocation();
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/search/:search" element={<SearchResults />} />
				<Route path="/recipe/:id" element={<Recipe />} />
			</Routes>
		</Router>
	);
};

export default Pages;
