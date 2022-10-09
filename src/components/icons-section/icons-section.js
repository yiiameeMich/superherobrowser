import React, {useState, useEffect} from 'react';
import './icons-section.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function IconsSection({first, second, third, fourth, names}) {

	const {firstN} = names;

	const [joke, setJoke] = useState(null);

	useEffect(() => {
		fetch(' https://geek-jokes.sameerkumar.website/api?format=json')
			.then(res => res.json())
			.then((data) => {
					return setJoke(data.joke)
				})
	})


	const notifyJoke = () => toast(`${joke}`, {theme: "dark"});
	const notifyName = () => toast(`I am ${firstN}`, {theme: "dark"});

	return (
		<span id='iconSection'>
			<img src={first}
			     alt='first icon'
			     className='charIcon' onClick={() => {
				notifyName()
			}}/>
			<img src={second}
			     alt='second icon'
			     className='charIcon' onClick={() => {
				notifyJoke()
			}}/>
			<img src={third}
			     alt='third icon'
			     className='charIcon' onClick={() => {
				notifyJoke()
			}}/>
			<img src={fourth}
			     alt='fourth icon'
			     className='charIcon' onClick={() => {
				notifyJoke()
			}}/>
		</span>

	)

}
