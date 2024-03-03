import React, { useState, useEffect } from "react";
import API from "../assets/API";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useLocation } from "react-router-dom";
import { Col, Card, Row, Container } from "react-bootstrap";
import axios from "axios";

const SearchResults = (props) => {
	return (
		<Col lg={5} sm={12}>
			{props.results.map(({ title, id, image }) => (
				<Link to={`/recipe/${id}`}>
					<Card
						className="m-4"
						border="light"
						// onClick={(e) => {
						// 	e.preventDefault();
						// 	Recipe(data.id);
						// }}
					>
						<Card.Img key={id} src={image} alt={title} />
						<Card.Body>
							<Card.Title>{title}</Card.Title>
						</Card.Body>
					</Card>
				</Link>
			))}
		</Col>
	);
};

export default SearchResults;
