let listeners = () =>{
    let searchPokemon = document.querySelector('#search-pokemon');
    let searchButton = document.querySelector('#search-button');
    let container = document.querySelector('#find-pokemon');
    
    searchPokemon.addEventListener('keyup', function(event) {
        if (event.keyCode == 13) {
            searchButton.click();
        }
    });

    searchButton.addEventListener('click', () => {
        var pokemonName = searchPokemon.value;
        getPokemon(pokemonName);
    });

    let insertSearch = (data) => {
        var typesPokemon = () => {
            var types = data.types;
            var html = '';
            for (var i = 0; i < types.length; i++) {
                html += types[i].type.name + ' ';
            }
            return html;
        }

        var html = 
        `<div class="card column">
            <p> name: ${data.name} </p>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p> types: ${typesPokemon()} </p>
            <p> weight: ${data.weight} </p>
            <p> height: ${data.height} </p>
        </div>`
        
        return html;
    }

    
    async function getPokemon(pokemonName) {
        var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+ pokemonName);
        var pokemonData = await response.json();
        console.log(pokemonData);
        
        /*var pokemon  = document.createElement('div');
        pokemon.innerHTML = insertSearch(pokemonData);
        */
        container.innerHTML = insertSearch(pokemonData) + container.innerHTML;
    }
}


listeners();