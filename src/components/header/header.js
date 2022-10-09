import React from 'react';
import './header.css'
import {Link} from 'react-router-dom'


export default function Header() {

	return (
		<span className='headerContainer'>
			<div id='appNameContainer'>
				<Link to='/' className='headerText' id='appName'>
					<img src={'https://www.pngkey.com/png/full/44-449727_black-and-white-superman-logo-transparent-images-black.png'}
					     alt='superman-icon' id='supermanIcon'/>
					Superhero Browser
				</Link>
			</div>
			<div className='textWrapper'>
				<Link to='all-characters' className='headerText small'> All characters </Link>
				<Link to='favorites' className='headerText small'> Favorites </Link>
			</div>
		</span>
	)

}