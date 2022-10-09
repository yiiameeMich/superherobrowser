import React, {useContext} from 'react'
import './details-page.css'
import {Button} from "@mui/material";
import {Context} from '../../../context'

export default function DetailsPage() {

	const {char, addToFavs} = useContext(Context)

	const {
		name,
		image,
		appearance,
		work,
		fullName,
		pseudos,
		alterEgos,
		placeOfBirth,
		powerstats,
		family,
		teams,
		publisher,
		isFav,
		id
	} = char

	const {intelligence, strength, speed, durability, power, combat} = powerstats

	const {gender, race, height, weight} = appearance

	const loadLogo = () => {
		if (publisher === 'Marvel Comics') {
			return (<img id='marvelLogo'
			             src={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Marvel-Comics-Logo.svg/1280px-Marvel-Comics-Logo.svg.png'}
			             alt='Marvel Logo'/>)
		} else if (publisher === 'DC Comics') {
			return (
				<img id='DcLogo'
				     src={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/768px-DC_Comics_logo.png'}
				     alt='DC Logo'/>
			)
		} else if (publisher === 'Dark Horse Comics') {
			return (<img id='DHLogo'
			             src={'https://seeklogo.com/images/D/dark-horse-comics-logo-836CA20089-seeklogo.com.png'}
			             alt='DH Logo'/>)
		} else {
			return <h2 className='smallInfoName'> {publisher} </h2>
		}
	}

	return (
		<div className='detailsPage'>
			<div id='imageDiv'>
				<h1 id='charNameHead'> {name} </h1>
				<img id='charImg' src={image} alt='Character Image'/>
					<Button id='addBtn' onClick={() => {addToFavs({id, name, powerstats, image, isFav})}}>Add to Favorites</Button>
			</div>
			<div id='textDiv'>
				<div className='column'>
					<div className='smallInfoSection'>
						<h1 className='smallInfoName'> Biography </h1>
						<p className='detailedInfo'>Real Name: {!fullName ? 'Unknown' : fullName}</p>
						<p className='detailedInfo'>Alter Egos: {alterEgos}</p>
						<p className='detailedInfo'>Pseudos: {pseudos.slice(0, 3).toString()}</p>
						<p className='detailedInfo'>Place of
							birth: {!placeOfBirth || placeOfBirth === '-' ? 'Unknown' : placeOfBirth}</p>
						<p className='detailedInfo'>Work: {work.occupation === '-' || work.occupation === 'null' ? 'Unknown' : work.occupation}</p>
						<p className='detailedInfo'>Relatives: {family === '-' ? 'Unknown' : family.split(',').slice(0, 3).toString()}</p>
						<p className='detailedInfo'>Teams: {teams === '-' ? 'Unknown' : teams.split(',').slice(0, 3).toString()}</p>
					</div>
					<div className='smallInfoSection personal'>
						<h1 className='smallInfoName '> Personal information </h1>
						<p className='detailedInfo'>Gender: {gender}</p>
						<p className='detailedInfo'>Race: {!race || race === 'null' ? 'Unknown' : race}</p>
						<p className='detailedInfo'>Height: {height[1] === '0 cm' || !weight[1] ? 'Unknown' : height[1]}</p>
						<p className='detailedInfo'>Weight: {weight[1] === '0 kg' || !weight[1] ? 'Unknown' : weight[1]}</p>
					</div>
				</div>
				<div className='column'>
					<div className='smallInfoSection powerstats'>
						<h1 className='smallInfoName '> Powerstats</h1>
						<p className='detailedInfo'><i
							className="bi bi-mortarboard-fill logo"/> Intelligence: {intelligence === 'null' ? '10' : intelligence}
						</p>
						<p className='detailedInfo'><i
							className="bi bi-hammer logo"/> Strength: {strength === 'null' ? '10' : strength}</p>
						<p className='detailedInfo'><i
							className="bi bi-speedometer logo"/> Speed: {speed === 'null' ? '10' : speed}</p>
						<p className='detailedInfo'><i
							className="bi bi-shield-fill  logo"/> Durability: {durability === 'null' ? '10' : durability}
						</p>
						<p className='detailedInfo'><i
							className="bi bi-lightning-fill logo"/> Power: {power === 'null' ? '10' : power} </p>
						<p className='detailedInfo'><i
							className="bi bi-screwdriver logo"/> Combat: {combat === 'null' ? '10' : combat}</p>
					</div>
					<div className='smallInfoSection publisher'>
						<h1 className='smallInfoName'> Publisher </h1>
						{loadLogo()}
					</div>
				</div>
			</div>
		</div>
	)

}