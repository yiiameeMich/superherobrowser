import React, {useContext} from 'react'
import {Context} from '../../../context'
import CharCard from "../../char-cards/char-card";
import './favorites-page.css'

export default function FavoritesPage() {

	const {favoriteArr, delFromFavs, addToFavs, getCharInfo} = useContext(Context)

	const loadCards = () => {

		return (favoriteArr.map((char) => <CharCard id={char.id}
		                                               key={Math.random() * 9999}
		                                               refreshable={false}
		                                               name={char.name}
		                                               image={char.image}
		                                               powerstats={char.powerstats}
		                                               isFavorite={true}
		                                                addToFavs={addToFavs}
		                                                getInfo={getCharInfo}
		                                               toDelete={delFromFavs}/>))
	}

	return (
		favoriteArr.length === 0
			? (<div id='favContainer'>
				<h1 id='favSectionName'> Your favorite characters</h1>
				<div id='dontHave'>
					<h3>You don't have any favorite characters yet.</h3>
					<h3>To add, click on star-button on the card</h3>
				</div>
			</div>)
			: (
				<>
					<h1 id='pageName'> Your Favorite Characters </h1>
					<div id='favSectionDiv'>
						{loadCards()}
					</div>
				</>
			)
	)

}