import axios from "axios";

// export function RecipeSearch(query, filter) {
const baseURL = "https://api.spoonacular.com/recipes/complexSearch?query=";

const apikey =
	"&number=5&apiKey=e6188429efc9449f8621d7236d9e8a3f&intolerances=";

export default {
	search: function (query, filter) {
		return axios.get(baseURL + query + apikey + filter);
	},
};

// 	axios
// 		.get(
// 			`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&apiKey=8566f284fe514e5889d5a1578ab3f80a&intolerances=${filter}`
// 		)
// 		.then((res) => {
// 			console.log(res.data.results);
// 		})
// 		.catch((error) => {
// 			console.error(error);
// 		});
// }

// export function RecipeDetail(id) {
// 	axios
// 		.get(
// 			`https://api.spoonacular.com/recipes/${id}/information?apiKey=8566f284fe514e5889d5a1578ab3f80a`
// 		)
// 		.then((response) => {
// 			console.log(response.data);
// 		})
// 		.catch((error) => {
// 			console.error(error);
// 		});
// }
