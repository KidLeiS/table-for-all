import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import InfoImg from "../assets/info.jpg";
import Download from '../components/Download';

const Recipe = () => {
	const [details, setDetails] = useState({});
	const [activeTab, setActiveTab] = useState("instructions");

	const params = useParams();

	const fetchDetails = async () => {
		const res = await fetch(
			`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=8566f284fe514e5889d5a1578ab3f80a`
		);
		const data = await res.json();
		return data;
	};

	

	useEffect(() => {
		let isMounted = true;

		fetchDetails().then((data) => {
			if (isMounted) setDetails(data);
		});
		return () => {
			isMounted = false;
		};
	}, [params.id]);

	return (
		<div>
			<div className="container-fliud">
				<div className="row m-3 d-flex justify-content-around">
					<div className="col-lg-4 col-md-10 col-sm-12 ">
						<div className="card  rounded-5">
							<img
								src={details.image}
								className="rounded-5 card-img-top"
								alt={details.title}
							/>

							<div className="card-body handwritten">
								<h2 className="card-title m-3 fs-1">{details.title}</h2>
							</div>
							<ul className="list-group list-group-flush m-2 handwritten fs-3">
								<li className="list-group-item">
									{" "}
									Vegetarian: {`${details.vegetarian}`}
								</li>
								<li className="list-group-item">Vegan: {`${details.vegan}`}</li>
								<li className="list-group-item">
									Gluten free: {`${details.glutenFree}`}
								</li>
								<li className="list-group-item">
									Dairy free: {`${details.dairyFree}`}
								</li>
								<li className="list-group-item">Serves: {details.servings}</li>
								<li className="list-group-item">
									Cooking time: {details.readyInMinutes} minutes
								</li>
							</ul>
						</div>
					</div>
					<div
						className="col-lg-7 col-md-10 col-sm-12 m-2 text-black text-start fs-4"
						style={{
							backgroundImage: `url(${InfoImg})`,
							backgroundSize: "cover",
						}}
					>
						<Button
							className={activeTab === "ingredients" ? "active" : ""}
							onClick={() => setActiveTab("ingredients")}
						>
							Ingredients
						</Button>
						<Button
							className={activeTab === "instructions" ? "active" : ""}
							onClick={() => setActiveTab("instructions")}
						>
							Instructions
						</Button>
						<Button 
							className={activeTab === "download" ? "active" : ""}
							onClick={() => setActiveTab("download")}
						>
							Download
						</Button>

						{activeTab === "ingredients" && (
							<div className="p-5 info">
								<div>
									{details.extendedIngredients.map(({ id, original }) => (
										<p key={id}>{original}</p>
									))}
								</div>
							</div>
						)}

						{activeTab === "instructions" && (
							<div className="container p-5 info">
								<div
									dangerouslySetInnerHTML={{ __html: details.summary }}
								></div>
								<div
									className="mt-5"
									dangerouslySetInnerHTML={{ __html: details.instructions }}
								></div>
							</div>
						)}

						{activeTab === "download" && (
							<div className="p-5 info">
								<Download download={
									`${details.title}\n\n${details.summary.replace(/(<([^>]+)>)/ig, '')}\n\nIngredients:\n${details.extendedIngredients.map(({ id, original }) => (`${original}\n`)).join("")}\n\nInstructions: \n${details.instructions.replace(/(<([^>]+)>)/ig, '')}`
								} />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

const Info = styled.div`
	margin-left: 5rem;

	@media (max-width: 1068px) {
		margin-top: 3rem;
		margin-left: 1rem;
	}
`;
const Button = styled.button`
	padding: 1rem 2rem;
	// color: none;
	background: transparent;
	// border: 2px solid #000;
	text-decoration: underline;
	text-underline-offset: 15px;
	margin-right: 2rem;
	font-weight: 400;
	font-size: 2rem;
	font-family: "Shadows Into Light", cursive;
`;

export default Recipe;
