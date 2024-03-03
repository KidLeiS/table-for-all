import axios from "axios";

const baseURL = "https://api.spoonacular.com/recipes/complexSearch?query=";

const apikey =
	"&number=6&apiKey=8566f284fe514e5889d5a1578ab3f80a&intolerances=";

export default {
	search: function (query, filter) {
		return axios.get(baseURL + query + apikey + filter);
	},
};
