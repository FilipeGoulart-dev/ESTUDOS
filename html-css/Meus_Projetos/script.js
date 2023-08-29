const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokemonListElement = document.querySelector('.pokemon-list');
const pokemonDetailsElement = document.getElementById('pokemon-details');
const pokemonNameElement = document.getElementById('pokemon-name');
const pokemonImageElement = document.getElementById('pokemon-image');
const pokemonTypeElement = document.getElementById('pokemon-type');

async function fetchPokemonData(pokemonId) {
    const response = await fetch(apiUrl + pokemonId);
    const data = await response.json();
    return data;
}

async function showPokemonDetails(pokemonId) {
    const pokemonData = await fetchPokemonData(pokemonId);

    pokemonNameElement.textContent = pokemonData.name;
    pokemonImageElement.src = pokemonData.sprites.front_default;
    pokemonTypeElement.textContent = `Type: ${pokemonData.types[0].type.name}`;

    pokemonDetailsElement.style.display = 'block';
}

async function populatePokedex() {
    for (let i = 1; i <= 151; i++) { // Fetching data for the first 151 Pokémons
        const listItem = document.createElement('li');
        listItem.textContent = `Pokemon #${i}`;
        listItem.addEventListener('click', () => {
            showPokemonDetails(i);
        });
        pokemonListElement.appendChild(listItem);
    }
}

populatePokedex();
