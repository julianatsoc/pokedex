function convertPokemonTypestoLi(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => `<li class="item-type">${typeSlot.type.name}  </li> `)
}

function convertPokemonToLi(pokemon) {
  return `

    <li class="pokemon" id="firstColor">
          <span class="number">#${pokemon.id}</span>
          <div class="name">${pokemon.name}</div>
          <div class="details-types">
            <ol class="list-types">
              ${convertPokemonTypestoLi(pokemon.types).join('')}
            </ol>
            <div class="image">
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokemon.id}.png" alt="${pokemon.name}" />
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {
  const newHtml = pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('')
  pokemonList.innerHTML = newHtml
})
