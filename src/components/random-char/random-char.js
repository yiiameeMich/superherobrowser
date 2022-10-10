import React, {Component} from 'react';
import './random-char.css'
import GetApiData from "../../services/api-service";
import {HashLoader} from "react-spinners";
import ErrorIndicator from "../error-indicator/error-indicator";
import {Link} from "react-router-dom";

export default class RandomChar extends Component {

	superheroApi = new GetApiData();

	state = {
		id: Math.round(Math.random()*731),
		isLoading: true,
		name: null,
		description: null,
		image: null,
		hasError: false
	};

	constructor() {
		super();
	}

	timerId = null;

	componentDidMount() {
		this.updateChar(this.state.id);
		this.timerId = setInterval(() => {
			const randomId = Math.floor(Math.random() * 731);
			this.setState( {
				id: randomId
			})
		}, 15000)
	}

	componentDidUpdate(prevProps, prevState, snapshot) {

		if (prevState.id !== this.state.id) {
			this.updateChar(this.state.id)
		}

	}

	componentWillUnmount() {
		clearInterval(this.timerId)
	}

	componentDidCatch(error, errorInfo) {
		this.setState({
			hasError: true,
		})
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
					appearance,
					work,
					connections: {
						['group-affiliation']: teams,
						['relatives']: family,
					},
				} = char || {}
				this.setState({
					isLoading: false,
					isFavorite: false,
					id,
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

		const {isLoading,
			name,
			description,
			alterEgos,
			pseudos,
			publisher,
			alignment,
			image,
			powerstats} = this.state;

		if (this.state.hasError){
			return (
				<div className='randomCharBlock'>
						<ErrorIndicator/>
				</div>
			)
		}


		if (isLoading) {
			return (
				<div className='randomCharBlock'>
					<div className='randomCharContainer loader'>
						<HashLoader id='spinner' color='white'/>
					</div>
				</div>

			)
		} else {
			return (
				<div className='randomCharBlock'>
					<div className='randomCharContainer '>
						<img src={image}
						     alt='character picture'
						     className='charPicture'/>
						<div className='textContainer'>
							<h1 id='charName'>{name}</h1>
							<p className='realName'> Real name: {!description ? 'Unknown' : description} </p>
							<p className='realName'> Alter egos: {alterEgos} </p>
							<p className='realName'> Pseudos: {pseudos.slice(0,3).toString()}</p>
							<p className='realName'> Publisher: {publisher === 'null' ? 'Unknown' : publisher} </p>
							<p className='realName'> Alignment: {alignment} </p>
						</div>
						<div className='powerContainer'>
							<h1 id='stats'>Powerstats</h1>
							<p className='stats'><i className="bi bi-mortarboard-fill logo" /> Intelligence: {powerstats.intelligence === 'null' ? '10' : powerstats.intelligence} </p>
							<p className='stats'><i className="bi bi-hammer logo" /> Strength: {powerstats.strength === 'null' ? '10' : powerstats.strength} </p>
							<p className='stats'><i className="bi bi-speedometer logo" /> Speed: {powerstats.speed === 'null' ? '10' : powerstats.speed} </p>
							<p className='stats'><i className="bi bi-shield-fill  logo" /> Durability: {powerstats.durability === 'null' ? '10' : powerstats.durability} </p>
							<p className='stats'><i className="bi bi-lightning-fill logo" /> Power: {powerstats.power === 'null' ? '10' : powerstats.power} </p>
							<p className='stats'><i className="bi bi-screwdriver logo" /> Combat: {powerstats.combat === 'null' ? '10' : powerstats.combat} </p>
						</div>
						<div id='button-block'>
							<button type='button' className='btn btn-outline btn-sm' onClick={() => this.props.addToFavs(this.state)}><i className='bi bi-star-fill'/></button>
							<button type='button' className='btn btn-outline btn-sm'
							onClick={() => this.updateChar(Math.floor(Math.random()*731))}>
								<i className="bi bi-arrow-clockwise" /></button>
							<Link to='details' type='button' className='btn btn-outline btn-sm' onClick={() => {this.props.getInfo(this.state)}}><i
								className="bi bi-eye-fill"/></Link>
						</div>

					</div>
				</div>

			)
		}

	}
}