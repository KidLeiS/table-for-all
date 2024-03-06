import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../assets/API";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Container, Form, InputGroup } from "react-bootstrap";
import SearchResults from "../pages/SearchResults";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Searchform(props) {
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
		{
			id: " ",
			name: "None",
			checked: true,
		},
	];
	const [checked, setChecked] = useState(intolerances);
	const [searchRecipe, setSearchRecipe] = useState({
		search: "",
		results: [],
	});

	const getRecipe = (query, filter) => {
		API.search(query, filter)
			.then((res) => {
				setSearchRecipe({ search: props.query, results: res.data.results });
			})
			.catch((err) => console.log(err));
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
				<label
					className="btn btn-outline-light"
					style={{ fontSize: "0.8rem" }}
					htmlFor={item.name}
				>
					{item.name}
				</label>
			</div>
		));
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

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setSearchRecipe({
			...searchRecipe,
			[name]: value,
		});
	};

	const filters = document.querySelector(".options");

	const handleFormSubmit = (event) => {
		event.preventDefault();
		getRecipe(searchRecipe.search, filters.textContent);
	};
	console.log(searchRecipe.search);
	return (
		<Container>
			<InputGroup>
				<Form.Control
					type="text"
					onChange={handleInputChange}
					name="search"
					aria-describedby="Recipe search field"
					placeholder="Search recipes, ingredients, nutrients..."
				/>

				<InputGroup.Text>
					<Link to={`/search/${searchRecipe.search}`}>
						<FontAwesomeIcon
							icon={faMagnifyingGlass}
							size="2xl"
							style={{ color: "#000000" }}
							type="submit"
							onClick={handleFormSubmit}
						/>
					</Link>
				</InputGroup.Text>
			</InputGroup>

			<Row className="m-3">
				<h5>
					⛔Your intolerances:⛔
					<span className="options">{getFilters()}</span>
				</h5>

				<div className="fluid-container">
					<div className="intolerances row">{getIntolerances()}</div>
				</div>
			</Row>

			<SearchResults
				search={searchRecipe.search}
				results={searchRecipe.results}
			/>
		</Container>
	);
}
export default Searchform;
