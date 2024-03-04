import React, { useState, useEffect, useRef } from "react";
import API from "../assets/API";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Button, Card, Col, Row, Container, Form } from "react-bootstrap";
import SearchResults from "../pages/Searchresults";
import { Link, useNavigate } from "react-router-dom";
import Recipe from "../pages/Recipe";

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
				setSearchRecipe({ ...searchRecipe, results: res.data.results });
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
				<label className="btn btn-outline-danger" htmlFor={item.name}>
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

	return (
		<Container>
			<Form>
				<div className="mb-3">
					<input
						className="form-control"
						type="text"
						onChange={handleInputChange}
						name="search"
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
			</Form>
			<Row>
				<h5>
					Your intolerances: {"  "}
					<span className="options">{getFilters()}</span>
				</h5>

				<div className="fluid-container">
					<div className="intolerances row">{getIntolerances()}</div>
				</div>
			</Row>
			{/* <Col lg={5} sm={12}>
				{searchRecipe.results.map((data) => (
					<Link to={`/recipe/${data.id}`}>
						<Card
							className="m-4"
							border="light"
							onClick={(e) => {
								e.preventDefault();
								Recipe(data.id);
							}}
						>
							<Card.Img key={data.id} src={data.image} alt={data.title} />
							<Card.Body>
								<Card.Title>{data.title}</Card.Title>
							</Card.Body>
						</Card>
					</Link>
				))}
			</Col> */}
			<SearchResults results={searchRecipe.results} />
		</Container>
	);
}
export default Searchform;
