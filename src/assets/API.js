import axios from "axios";

const baseURL = "https://api.spoonacular.com/recipes/complexSearch?query=";

const apikey =
	"&number=6&apiKey=6ce5f88a05584207a7d60ceeb5e65a9f&intolerances=";

export default {
	search: function (query, filter) {
		return axios.get(baseURL + query + apikey + filter);
	},
};
