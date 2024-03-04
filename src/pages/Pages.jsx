import { Routes, Route, Router, useLocation } from "react-router-dom";
import Recipe from "./Recipe";
import SearchResults from "./Searchresults";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";

const Pages = () => {
	// const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<Routes>
				{/* <Route path="/home" element={<Home />} /> */}
				<Route path="/search/:search" element={<SearchResults />} />
				<Route path="/recipe/:id" element={<Recipe />} />
			</Routes>
		</AnimatePresence>
	);
};

export default Pages;
