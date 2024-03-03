import axios from "axios";
import { useEffect, useState } from "react";

function Recipe(id) {
	axios
		.get(
			`https://api.spoonacular.com/recipes/${id}/information?apiKey=8566f284fe514e5889d5a1578ab3f80a`
		)
		.then((res) => {
			let data = res.data;
			console.log(`

${data.title}
${data.image}
Instructions: ${data.instructions}
Vegetarian: ${data.vegetarian}
Vegan: ${data.glutenFree}
Dairy free: ${data.dairyFree}
Serving: ${data.servings}
Cooking time: ${data.readyInMinutes} minutes
`);
		})
		.catch((err) => {
			console.log(err);
		});

	return (
		<div>
			<p>
				{id}
				{/* Instructions: {instructions}
				Vegetarian: {vegetarian}
				Vegan: {glutenFree}
				Dairy free: {dairyFree}
				Serving: {servings}
				Cooking time: {readyInMinutes} minutes */}
				Recipe information placeholder
			</p>
		</div>
	);
}

export default Recipe;
