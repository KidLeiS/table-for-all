import React from "react";
import { useState } from "react";
import Searchform from "../components/Searchform";

function Home(props) {
	return (
		<div>
			<br />
			<h1>Dinner Party Planner</h1>
			<div className="container text-center">
				<p>
					The website which allows you to compile a series of recipes, for your
					next dinner party!
				</p>
			</div>
			<Searchform />
		</div>
	);
}

export default Home;
