import React, {Component} from "react";
import './char-card.css';
import GetApiData from "../../services/api-service";
import {HashLoader} from "react-spinners";
import {Link} from 'react-router-dom'

export default class CharCard extends Component {

	superheroApi = new GetApiData();

	constructor() {
		super();
	}

	state = {
		isLoading: true,
		image: null,
		name: 'none'
	}

	componentDidMount() {
		const {id} = this.props;
		this.updateChar(id)
	}

	updateChar = (id) => {
		this.superheroApi.getChar(id)
			.then((char) => {
				const {
					id,
					biography: {
						['full-name']: fullName,
						['alter-egos']: alterEgos,
						['place-of-birth']: placeOfBirth,
						aliases: pseudos,
						publisher,
						alignment},
					name, image: {url} = {},
					powerstats: {
						intelligence,
						strength,
						speed,
						durability,
						power,
						combat
					},
					connections: {
						['group-affiliation']: teams,
						['relatives']: family,
					},
					appearance,
					work,
				} = char || {}
				this.setState({
					id,
					isLoading: false,
					isFavorite: false,
					name: name,
					image: url,
					powerstats: {
						intelligence,
						strength,
						speed,
						durability,
						power,
						combat
					},
					fullName,
					pseudos,
					alterEgos,
					appearance,
					work,
					placeOfBirth,
					publisher,
					alignment,
					family,
					teams
				})
			})
	}

	render() {

		const {
			id,
			isLoading,
			isFavorite,
			name, image,
			powerstats
		} = this.state;



		if (isLoading) {
			return (
				<div className='charCardContainer'>
					<HashLoader color='white'/>
				</div>
			)
		}

		return (
			<div className='charCardContainer'>
				<img src={image}
				     alt='Character Image' id='charCardImage'/>
				<div id='textContainer'>
					<h1 id='charCardName'>{name}</h1>
					<div>
						<p className='cardStats'><i
							className="bi bi-mortarboard-fill logo"/> Intelligence: {powerstats.intelligence === 'null' ? '10' : powerstats.intelligence}
						</p>
						<p className='cardStats'><i
							className="bi bi-hammer logo"/> Strength: {powerstats.strength === 'null' ? '10' : powerstats.strength}</p>
						<p className='cardStats'><i
							className="bi bi-speedometer logo"/> Speed: {powerstats.speed === 'null' ? '10' : powerstats.speed}</p>
						<p className='cardStats'><i
							className="bi bi-shield-fill  logo"/> Durability: {powerstats.durability === 'null' ? '10' : powerstats.durability}
						</p>
						<p className='cardStats'><i
							className="bi bi-lightning-fill logo"/> Power: {powerstats.power === 'null' ? '10' : powerstats.power}</p>
						<p className='cardStats'><i
							className="bi bi-screwdriver logo"/> Combat: {powerstats.combat === 'null' ? '10' : powerstats.combat}</p>
					</div>
				</div>
				<span>
					{this.props.isFavorite
						? <button type='button' className='btn btn-outline btn-sm' onClick={() => this.props.toDelete(id, name)}><i
							className="bi bi-x-circle-fill"/></button>
						: <button type='button' className='btn btn-outline btn-sm' onClick={() => this.props.addToFavs({
							id,
							name,
							image,
							powerstats,
							isFavorite
						})}><i className='bi bi-star-fill'/></button>}

							<Link to='details' type='button' className='btn btn-outline btn-sm' onClick={() => {this.props.getInfo(this.state)}}><i
								className="bi bi-eye-fill" /></Link>
					{this.props.refreshable
						&& <button type='button' className='btn btn-outline btn-sm'
					         onClick={() => this.updateChar(Math.floor(Math.random() * 731))}>
						<i className="bi bi-arrow-clockwise"/></button>}
				</span>
			</div>
		)
	}

}



