import React, {useState, useContext} from 'react'
import './all-characters.css'
import CharCard from "../../char-cards/char-card";
import {Button} from "@mui/material";
import {Context} from "../../../context";

export default function AllCharacters() {

	const {addToFavs, chars, getCharInfo} = useContext(Context)

	const [searchValue, setSearchValue] = useState('')
	const [sliceNum, setSliceNum] = useState(16)

	const loadChars = (a, b) => {
		return (
			searchFilter
				.map((char) => <CharCard id={char.id}
				                         key={char.id}
				                         refreshable={false}
			                              name={char.name}
			                              image={char.images.sm}
			                              powerstats={char.powerstats}
			                              addToFavs={addToFavs}
											getInfo={getCharInfo}/>).slice(a, b)
		)
	}

	const searchFilter = chars.filter((char) => char.name.toLowerCase().includes(searchValue.toLowerCase()))

	return (
		<div>
			<h1 id='pageName'>All Characters</h1>
			<form className='searchForm' onSubmit={(e) => e.preventDefault()}>
				<input type='text'
				       placeholder='Character name...'
				       className='searchInput'
				       value={searchValue}
				       onChange={(e) => {
					       setSearchValue(e.target.value)
				       }}/>
				<i className="bi bi-search" id='searchLogo'/>
			</form>
			<div id='allCharsDiv'>
				{loadChars(0, sliceNum)}
			</div>
			{searchFilter.length > sliceNum && <Button variant='outlined' id='seeMoreFav' onClick={() => setSliceNum(sliceNum + 16)}> See more </Button>}
		</div>
	)
}



