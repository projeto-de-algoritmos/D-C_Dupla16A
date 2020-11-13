async function getPokemons(setPokemons){
    const request = new Request(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=717`)
    return(fetch(request)
        .then(response => response.json())
        .then(async json => {
            var arr = [];
            json.results.map((element, index) => {
                const request_2 = new Request(element.url)
                fetch(request_2)
                    .then(response => response.json())
                    .then(pokemonDetails => {
                        arr = [...arr, {
                            id: pokemonDetails.id,
                            name: pokemonDetails.name,
                            sprites: pokemonDetails.sprites,
                            types: pokemonDetails.types,
                            hp: pokemonDetails.stats[0].base_stat,
                            attack: pokemonDetails.stats[1].base_stat,
                            defense: pokemonDetails.stats[2].base_stat,
                            specialAttack: pokemonDetails.stats[3].base_stat,
                            specialDefense: pokemonDetails.stats[4].base_stat,
                            speed: pokemonDetails.stats[5].base_stat,
                            stats: pokemonDetails.stats
                        }];
                        return(arr)
                    }).then(teste => {
                        if(teste.length === 717){
                            console.log('terminou')
                            setPokemons(teste)
                        }
                    })
            })
        }).then((arr) => arr)
    )
}
export default getPokemons;
