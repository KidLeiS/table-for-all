import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Recipe = () => {
	const [details, setDetails] = useState({});
	const [activeTab, setActiveTab] = useState("instructions");

	const params = useParams();

	const fetchDetails = async () => {
		const res = await fetch(
			`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=6ce5f88a05584207a7d60ceeb5e65a9f`
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
			<div className="card">
				<div className="row g-0">
					<div className="col-md-8">
						<img
							src={details.image}
							className="img-fluid rounded-start"
							alt={details.title}
						/>
					</div>
					<div className="col-md-4">
						<div className="card-body">
							<h2 className="card-title">{details.title}</h2>
							<div className="card-text">
								<p className="card-text"> Vegetarian: </p>
								<p className="card-text">{`${details.vegetarian}`}</p>
								<p className="card-text">Vegan: </p>
								<p className="card-text">{`${details.vegan}`}</p>
								<p className="card-text">Gluten free: </p>
								<p className="card-text"> {`${details.glutenFree}`}</p>
								<p className="card-text">Dairy free: </p>
								<p className="card-text">{`${details.dairyFree}`}</p>
								<p className="card-text">Serving: </p>
								<p className="card-text">{details.servings}</p>
								<p className="card-text">Cooking time:</p>
								<p className="card-text">{details.readyInMinutes} minutes</p>
							</div>
						</div>
					</div>
				</div>
			</div>

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
			{activeTab === "ingredients" && (
				<div>
					<p>
						{details.extendedIngredients.map(({ id, original }) => (
							<p key={id}>{original}</p>
						))}
					</p>
				</div>
			)}

			{activeTab === "instructions" && (
				<div>
					<p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
					<p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
				</div>
			)}
		</div>
	);
};

export default Recipe;
