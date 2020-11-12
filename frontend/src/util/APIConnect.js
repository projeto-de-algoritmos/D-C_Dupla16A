async function getPokemons(offset, limit){
	const request = new Request(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
	return(fetch(request)
		.then(response => response.json())
		.then(async json => {
			var arr = [];
			for (const element of json.results){
				const request_2 = new Request(element.url)
				await fetch(request_2)
					.then(response => response.json())
					.then(pokemonDetails => {
						arr = [...arr, pokemonDetails];
					})
			}
			return(arr)
		}).then((arr) => arr)
	)
}
export default getPokemons;