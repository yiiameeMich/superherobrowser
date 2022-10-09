import React, {useContext} from 'react'
import RandomChar from "../random-char/random-char";
import FeaturedChars from "../featured-chars/featured-chars";
import IconsSection from "../icons-section/icons-section";
import FavoritesSection from "../favorites-section/favorites-section";
import {Context} from '../../context'


function Homepage() {

	const {favoriteArr, addToFavs, delFromFavs, getCharInfo} = useContext(Context)

	const grootIcon = 'https://cdn-icons-png.flaticon.com/512/663/663082.png';
	const ironmanIcon = 'https://cdn-icons-png.flaticon.com/512/663/663084.png';
	const spiderManIcon = 'https://cdn-icons-png.flaticon.com/512/663/663087.png';
	const deadpoolIcon = 'https://cdn-icons-png.flaticon.com/512/663/663080.png';

	const batmanIcon = 'https://cdn-icons-png.flaticon.com/512/663/663076.png';
	const jokerIcon = 'https://cdn-icons-png.flaticon.com/512/663/663085.png';
	const wonderWomanIcon = 'https://cdn-icons-png.flaticon.com/512/663/663090.png';
	const greenLanternIcon = 'https://cdn-icons-png.flaticon.com/512/663/663081.png';

	const names = {
		firstSection: {
			firstN: 'Groot',
		},
		secondSection: {
			firstN: 'Batman',
		}
	}

	return (
		<div className='App'>
			<RandomChar addToFavs={addToFavs} getInfo={getCharInfo}/>
			<FeaturedChars addToFavs={addToFavs} getInfo={getCharInfo}/>
			<IconsSection first={grootIcon}
			              second={ironmanIcon}
			              third={spiderManIcon}
			              fourth={deadpoolIcon} names={names.firstSection}/>
			<FavoritesSection favArr={favoriteArr} toDelete={delFromFavs} getInfo={getCharInfo} addToFavs={addToFavs}/>
			<IconsSection first={batmanIcon}
			              second={jokerIcon}
			              third={wonderWomanIcon}
			              fourth={greenLanternIcon} names={names.secondSection}/>
		</div>
	)

}

export default Homepage;