import React, {useState, useEffect} from "react";
import './App.css';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../header/header";
import {Switch, Route} from 'react-router-dom'
import DetailsPage from "../pages/details-page/details-page";
import Homepage from "../pages/Homepage";
import AllCharacters from "../pages/all-chars-page/all-characters";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import {Context} from '../../context'

function App() {

	const [char, setChar] = useState({})
	const [chars, setChars] = useState([])
	const [favoriteArr, setFavoriteArr] = useState(
		JSON.parse(localStorage.getItem('favorite chars')) || []
	);

	useEffect(() => {
		localStorage.setItem('favorite chars', JSON.stringify(favoriteArr))
	}, [favoriteArr])

	useEffect(() => {
		fetch('https://raw.githubusercontent.com/or-yam/superhero-api-app/main/charcters_json_api/characters.json')
			.then((res) => res.json())
			.then((res) => setChars(res))
	}, [])

	const onAdd = (character) => toast.success(`${character} added to favorites!`, {theme: "dark"})
	const onDel = (character) => toast.error(`${character} deleted from favorites!`, {theme: "dark"})
	const alreadyExist = (character) => toast.warn(`${character} is already added to favorites`, {theme: 'dark'})

	const addToFavs = (item) => {
		item.isFavorite = true

		if (favoriteArr.find((elem) => {
			return elem.id === item.id
		})) {
			alreadyExist(item.name)
		} else {
			setFavoriteArr((state) => {
				return [...state, item]
			})
			onAdd(item.name)
		}
	}

	const getCharInfo = (item) => {

		const char = {
			isFav: item.isFavorite,
			id: item.id,
			name: item.name,
			image: item.image,
			powerstats: item.powerstats,
			fullName: item.fullName,
			alterEgos: item.alterEgos,
			pseudos: item.pseudos,
			appearance: item.appearance,
			placeOfBirth: item.placeOfBirth,
			work: item.work,
			family: item.family,
			teams: item.teams,
			publisher: item.publisher
		}

		setChar(char)
	}

	const delFromFavs = (id, name) => {
		onDel(name)
		const filteredArr = favoriteArr.filter((item) => item.id !== id)
		setFavoriteArr(filteredArr)
	}

	return (
		<Context.Provider value={{favoriteArr, addToFavs, delFromFavs, chars, getCharInfo, char}}>
			<div className="App">
				<Header/>
				<Switch>
					<Route exact path='/'>
						<Homepage />
					</Route>
					<Route path='/details/'>
						<DetailsPage/>
					</Route>
					<Route path='/all-characters'>
						<AllCharacters />
					</Route>
					<Route path='/favorites'>
						<FavoritesPage />
					</Route>
				</Switch>
				<ToastContainer className='toaster'
				                position='top-center'
				                autoClose={3000}
				                hideProgressBar={false}
				                newestOnTop={false}
				                closeOnClick
				                rtl={false}
				                pauseOnFocusLoss
				                draggable
				                pauseOnHover/>
			</div>
		</Context.Provider>


	);
}

export default App;
