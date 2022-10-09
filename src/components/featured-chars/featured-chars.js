import React, {Component} from 'react';
import './featured-chars.css'
import CharCard from "../char-cards/char-card";
import ErrorIndicator from "../error-indicator/error-indicator";


export default class FeaturedChars extends Component {

	state = {
		hasError: false
	}

	componentDidCatch(error, errorInfo) {
		this.setState({
			hasError: true,
		})
	}

	render () {

		if (this.state.hasError) {
			return (
				<div className='FeaturedContainer'>
					<h1 id='sectionName'> Featured Characters </h1>
					<ErrorIndicator />
				</div>
			)
		}

		return (
			<div className='FeaturedContainer'>
				<h1 id='sectionName'> Featured Characters </h1>
				<div id='cardsContainer'>
					<CharCard id={Math.round(Math.random()*731)} addToFavs={this.props.addToFavs} refreshable={true} getInfo={this.props.getInfo}/>
					<CharCard id={Math.round(Math.random()*731)} addToFavs={this.props.addToFavs} refreshable={true} getInfo={this.props.getInfo}/>
					<CharCard id={Math.round(Math.random()*731)} addToFavs={this.props.addToFavs} refreshable={true} getInfo={this.props.getInfo}/>
					<CharCard id={Math.round(Math.random()*731)} addToFavs={this.props.addToFavs} refreshable={true} getInfo={this.props.getInfo}/>
				</div>
			</div>
		)
	}
}