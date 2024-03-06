import React from "react";
import Searchform from "../components/Searchform";
import Pages from "./Pages";

function Home(props) {
	return (
		<div style={{ backgroundColor: "rgb(0,0,0,0.5)", borderRadius: 25 }}>
			<div>
				<h1 className="title p-4">Table for All</h1>
				<div className="container text-center">
					<h2 className="handwritten">
						Print Your Own Recipes for Home Dinner Parties
					</h2>
				</div>
			</div>
			<Searchform />
		</div>
	);
}

export default Home;
