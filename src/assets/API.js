import axios from "axios";

const baseURL = "https://api.spoonacular.com/recipes/complexSearch?query=";

const apikey =
	"&number=6&apiKey=e6188429efc9449f8621d7236d9e8a3f&intolerances=";

export default {
	search: function (query, filter) {
		return axios.get(baseURL + query + apikey + filter);
	},
};
