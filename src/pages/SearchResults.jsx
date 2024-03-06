import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { Card, CardGroup } from "react-bootstrap";

const SearchResults = (props) => {
	return (
		<CardGroup className="justify-content-around">
			{props.results.map(({ title, id, image, imageType }) => (
				<Link to={`/recipe/${id}`}>
					<Card
						key={title.split("")}
						style={{ width: "25rem", borderRadius: 25 }}
						border="light"
						className="m-3"
					>
						<Card.Img
							variant="top"
							key={{ id } + { imageType }}
							src={image}
							alt={title}
							style={{ borderRadius: 25 }}
						/>
						<Card.Body key="card-body">
							<Card.Title
								style={{ fontSize: "2.2rem" }}
								className="handwritten"
								key={id}
							>
								{title}
							</Card.Title>
						</Card.Body>
					</Card>
				</Link>
			))}
		</CardGroup>
	);
};

export default SearchResults;
