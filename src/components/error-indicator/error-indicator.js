import React from 'react';
import './error-indicator.css'


export default function ErrorIndicator() {

	return (
		<div id='errorContainer'>
			<h1 id='errorText'> Something went terribly wrong...</h1>
			<img src={'https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2018/10/batman-who-laughs-header.jpg?resize=696%2C366'} alt='error image' id='errorImage' />
		</div>
	)


}