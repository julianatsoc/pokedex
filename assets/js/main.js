
function convertPokemonToLi(pokemon) {
  return `

    <li class="pokemon ${pokemon.type}" id="firstColor">
          <span class="number">#${pokemon.id}</span>
          <div class="name">${pokemon.name}</div>
          <div class="details-types">
            <ol class="list-types">
            ${pokemon.types.map((type) => `<li class="${type}">${type}</li>`).join('')}
            </ol >
  <div class="image">
    <img src="${pokemon.photo}" alt="${pokemon.name}" />
  </div>
        </li >
  `
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {
  const newHtml = pokemons.map(convertPokemonToLi).join('');
  pokemonList.innerHTML = newHtml;
});