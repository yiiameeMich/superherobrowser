import React, {useState} from "react";
import './favorites-section.css'
import {Button} from "@mui/material";
import CharCard from "../char-cards/char-card";

export default function FavoritesSection({favArr, toDelete, getInfo, addToFavs}) {

	const [sliceNum, setSliceNum] = useState(4);

	function loadCards(a, b) {
		return (
			favArr
				.map((item) => <CharCard toDelete={toDelete}
			                                  key={Math.random()*9999}
			                                  id={item.id}
			                                  name={item.name}
			                                  image={item.image}
			                                  powerstats={item.powerstats}
					                          addToFavs={addToFavs}
					                          isFavorite={true}
			                                  getInfo={getInfo}/>).slice(a, b)
		)
	}


	return (
		favArr.length === 0 ? (
			<div id='favContainer'>
				<h1 id='favSectionName'> Your favorite characters</h1>
				<div id='dontHave'>
					<h3>You don't have any favorite characters yet.</h3>
					<h3>To add, click on star-button on the card</h3>
				</div>
			</div>
		) : (
			<div id='favContainer'>
				<h1 id='favSectionName'> Your favorite characters</h1>
				<div id='favSection'>
					{loadCards(0, sliceNum)}
				</div>
				{favArr.length > sliceNum && <Button variant='outlined' id='seeMoreFav' onClick={() => setSliceNum(sliceNum + 4)}> See more </Button>}
			</div>
		)
	)
}