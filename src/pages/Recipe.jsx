import axios from "axios";
import { Button } from "react-bootstrap";
import Wrapper from "../components/Wrapper";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Searchform from "../components/Searchform";
const Recipe = () => {
	// function Recipe(id) {
	// 	axios
	// 		.get(
	// 			`https://api.spoonacular.com/recipes/${id}/information?apiKey=e6188429efc9449f8621d7236d9e8a3f`
	// 		)
	// 		.then((res) => {
	// 			let data = res.data;
	// 			console.log(data);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});

	// 	return (
	// 		<div>
	// 			<Searchform />
	// 			<p>
	// 				{id}
	// 				{/* Instructions: {instructions}
	// 				Vegetarian: {vegetarian}
	// 				Vegan: {glutenFree}
	// 				Dairy free: {dairyFree}
	// 				Serving: {servings}
	// 				Cooking time: {readyInMinutes} minutes */}
	// 				Recipe information placeholder
	// 			</p>
	// 		</div>
	// 	);

	const [details, setDetails] = useState({});
	const [activeTab, setActiveTab] = useState("instructions");

	const params = useParams();

	const fetchDetails = async () => {
		const res = await fetch(
			`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=e6188429efc9449f8621d7236d9e8a3f`
		);
		const data = await res.json();
		return data;
	};

	useEffect(() => {
		let isMounted = true;

		fetchDetails().then((data) => {
			if (isMounted) setDetails(data);
		});
		return () => {
			isMounted = false;
		};
	}, [params.id]);

	return (
		<Wrapper>
			<div>
				<h2>{details.title}</h2>
				<img src={details.image} alt={details.title} />
			</div>

			<Button
				className={activeTab === "ingredients" ? "active" : ""}
				onClick={() => setActiveTab("ingredients")}
			>
				Ingredients
			</Button>
			<Button
				className={activeTab === "instructions" ? "active" : ""}
				onClick={() => setActiveTab("instructions")}
			>
				Instructions
			</Button>
			{activeTab === "ingredients" && (
				<div>
					<p>
						{details.extendedIngredients.map(({ id, original }) => (
							<p key={id}>{original}</p>
						))}
					</p>
					<p>
						Vegetarian: {details.vegetarian}Vegan: {details.glutenFree} Dairy
						free: {details.dairyFree}
						Serving: {details.servings} Cooking time: {details.readyInMinutes}{" "}
						minutes
					</p>
				</div>
			)}

			{activeTab === "instructions" && (
				<div>
					<p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
					<p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
				</div>
			)}
		</Wrapper>
	);
};

export default Recipe;
