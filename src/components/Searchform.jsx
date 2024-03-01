import React, { useState } from "react";
import API from "../assets/API";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

function Searchform() {
	const [searchData, setSearchData] = useState({
		search: "",
		// intolerances: "",
		results: [],
	});

	const getRecipe = (query, filter) => {
		API.search(query, filter)
			.then((res) =>
				setSearchData({ ...searchData, results: res.data.results })
			)
			.catch((err) => console.log(err));
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setSearchData({
			...searchData,
			[name]: value,
		});
	};
	const handleFormSubmit = (event) => {
		event.preventDefault();
		getRecipe(searchData.search, searchData.intolerances);
	};

	// get 5 recipes from search results
	function getList(data) {
		return (
			<Card style={{ width: "28rem", margin: 20 }}>
				<Card.Img key={data.id} src={data.image} alt={data.title} />
				<Card.Body>
					<Card.Title>{data.title}</Card.Title>
					<Button variant="warning">Placeholder instruction</Button>
				</Card.Body>
			</Card>
		);
	}
	return (
		<div>
			<form>
				<div className="mb-3">
					<label htmlFor="search" className="form-label">
						Recipe search:
						<input
							onChange={handleInputChange}
							type="text"
							className="form-control"
							name="search"
							aria-describedby="Recipe search field"
						/>
					</label>
					<div id="searchHelp" className="form-text">
						Feel free to search by recipe keywords or ingredient names!
					</div>
				</div>
				<div id="allergens" className="mb-3 form-check container">
					<div id="allergensHelp" className="form-text">
						Please check all your allergens/intolerances:{" "}
					</div>
					<div className="row">
						<div className="col">
							<label className="form-check-label" htmlFor="dairy">
								Dairy
								<input
									type="checkbox"
									className="form-check-input"
									id="dairy"
								/>
							</label>
						</div>
						<div className="col">
							<label className="form-check-label" htmlFor="egg">
								Egg
								<input type="checkbox" className="form-check-input" id="egg" />
							</label>
						</div>
						<div className="col">
							<label className="form-check-label" htmlFor="gluten">
								Gluten
								<input
									type="checkbox"
									className="form-check-input"
									id="gluten"
								/>
							</label>
						</div>
						<div className="col">
							<label className="form-check-label" htmlFor="grain">
								Grain
								<input
									type="checkbox"
									className="form-check-input"
									id="grain"
								/>
							</label>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<label className="form-check-label" htmlFor="peanut">
								Peanut
								<input
									type="checkbox"
									className="form-check-input"
									id="peanut"
								/>
							</label>
						</div>
						<div className="col">
							<label className="form-check-label" htmlFor="sesame">
								Sesame
								<input
									type="checkbox"
									className="form-check-input"
									id="sesame"
								/>
							</label>
						</div>
						<div className="col">
							<label className="form-check-label" htmlFor="treeNut">
								Tree nut
								<input
									type="checkbox"
									className="form-check-input"
									id="treeNut"
								/>
							</label>
						</div>
						<div className="col">
							<label className="form-check-label" htmlFor="soy">
								Soy
								<input type="checkbox" className="form-check-input" id="soy" />
							</label>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<label className="form-check-label" htmlFor="seafood">
								Seafood
								<input
									type="checkbox"
									className="form-check-input"
									id="seafood"
								/>
							</label>
						</div>
						<div className="col">
							<label className="form-check-label" htmlFor="shellfish">
								Shellfish
								<input
									type="checkbox"
									className="form-check-input"
									id="shellfish"
								/>
							</label>
						</div>
						<div className="col">
							<label className="form-check-label" htmlFor="sulphite">
								Sulphite
								<input
									type="checkbox"
									className="form-check-input"
									id="sulphite"
								/>
							</label>
						</div>
						<div className="col">
							<label className="form-check-label" htmlFor="wheat">
								Wheat
								<input
									type="checkbox"
									className="form-check-input"
									id="wheat"
								/>
							</label>
						</div>
					</div>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={handleFormSubmit}
				>
					Submit
				</button>
			</form>
			<Container>
				<Row>{searchData.results.map(getList)}</Row>
			</Container>
		</div>
	);
}

export default Searchform;
