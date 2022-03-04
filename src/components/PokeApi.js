import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokeApi = () => {
	const [pokemon, setPokemon] = useState({});
	const [weight, setWeight] = useState(0);
	const [height, setHeight] = useState(0);
	const [isDec, setIsDec] = useState(true);
	const [isHect, setIsHect] = useState(true);

	useEffect(() => {
		axios.get('https://pokeapi.co/api/v2/pokemon/9/').then(res => {
			setPokemon(res.data);
			setHeight(res.data.height);
			setWeight(res.data.weight);
		});
	}, []);

	console.log(pokemon);

	const convertWeight = () => {
		if (isHect) {
			setWeight(weight * 100);
			setIsHect(false);
		} else {
			setWeight(weight / 100);
			setIsHect(true);
		}
	};

	const convertHeight = () => {
		if (isDec) {
			setHeight(height / 10);
			setIsDec(false);
		} else {
			setHeight(height * 10);
			setIsDec(true);
		}
	};

	return (
		<div>
			<h1 className="text-uppercase">
				<span>{pokemon.name}</span>
			</h1>
			<img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
			<h4>
				<span>Weight</span>: {weight} {isHect ? 'hectograms' : 'grams'}
			</h4>
			<h4>
				<span>Height</span>: {height} {isDec ? 'decimeters' : 'meters'}
			</h4>
			<h4>
				<span>Type</span>: {pokemon.types?.[0].type.name}{' '}
			</h4>
			<button className="btn btn-outline-primary" onClick={convertWeight}>
				Conver to grams
			</button>
			<button className="btn btn-outline-primary" onClick={convertHeight}>
				Conver to meters
			</button>
		</div>
	);
};

export default PokeApi;
