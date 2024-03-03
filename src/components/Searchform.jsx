import React, { useState, useEffect, useRef } from "react";
import API from "../assets/API";
import "bootstrap/dist/css/bootstrap.css";
import { useParams } from "react-router-dom";
import { Button, Card, Row, Container } from "react-bootstrap";
import SearchResults from "../pages/Searchresults";

function Searchform() {
	const intolerances = [
		{
			id: "dairy",
			name: "Dairy",
			checked: false,
		},
		{
			id: "egg",
			name: "Egg",
			checked: false,
		},
		{
			id: "gluten",
			name: "Gluten",
			checked: false,
		},
		{
			id: "grain",
			name: "Grain",
			checked: false,
		},
		{
			id: "peanut",
			name: "Peanut",
			checked: false,
		},
		{
			id: "seafood",
			name: "Seafood",
			checked: false,
		},
		{
			id: "sesame",
			name: "Sesame",
			checked: false,
		},
		{
			id: "shellfish",
			name: "Shellfish",
			checked: false,
		},
		{
			id: "soy",
			name: "Soy",
			checked: false,
		},
		{
			id: "sulfite",
			name: "Sulfite",
			checked: false,
		},
		{
			id: "tree nut",
			name: "Tree nut",
			checked: false,
		},
		{
			id: "wheat",
			name: "Wheat",
			checked: false,
		},
	];
	const [checked, setChecked] = useState(intolerances);

	const params = useParams();
	const search = useRef();

	const filters = document.querySelector(".options");

	const getRecipe = (query, filter) => {
		API.search(query, filter)
			.then((res) => {
				return console.log(res.data.results);
			})
			.catch((err) => console.log(err));
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		getRecipe(search.current.value, filters.textContent);
	};

	const handleCheckbox = (id) => {
		setChecked((prev) => {
			return prev.map((item) => {
				if (item.name === id) {
					return { ...item, checked: !item.checked };
				} else {
					return { ...item };
				}
			});
		});
	};

	const getIntolerances = () => {
		return checked.map((item) => (
			<div className="intolerance col p-2 " key={item.name}>
				<input
					type="checkbox"
					className="btn-check"
					id={item.name}
					label={item.name}
					onClick={() => handleCheckbox(item.name)}
				/>
				{item.checked}
				<label className="btn btn-outline-danger" htmlFor={item.name}>
					{item.name}
				</label>
			</div>
		));
	};

	function getFilters() {
		return checked.map((item) => {
			if (item.checked) {
				return (
					<span className="option" key={item.name}>
						{...item.id},
					</span>
				);
			}
		});
	}

	return (
		<div>
			<form>
				<div className="mb-3">
					<input
						className="form-control"
						ref={search}
						type="text"
						name="search"
						label="recipe"
						aria-describedby="Recipe search field"
						placeholder="Search recipes, ingredients, nutrients..."
					/>
				</div>
				<button
					type="submit"
					className="btn btn-warning"
					onClick={handleFormSubmit}
				>
					Get inspirations!
				</button>
			</form>
			<div>
				<h5>
					Your intolerances: {"  "}
					<span className="options">{getFilters()}</span>
				</h5>

				<div className="fluid-container">
					<div className="intolerances row">{getIntolerances()}</div>
				</div>
			</div>

			{/* <SearchResults key={}/> */}
		</div>
	);
}
export default Searchform;
