
function convertPokemonToLi(pokemon) {
  return `

    <li class="pokemon ${pokemon.type}" id="firstColor">
          <span class="number">#${pokemon.id}</span>
          <div class="name">${pokemon.name}</div>
          <div class="details-types">
            <ol class="list-types">
              ${pokemon.types.map((type) => `<li class="item-type">${type}</li> `).join('')}
            </ol >
  <div class="image">
    <img src="${pokemon.photo}" alt="${pokemon.name}" />
  </div>
        </li >
  `
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {
  const newHtml = pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('')
  pokemonList.innerHTML = newHtml
})

function applyTypeColorToElement(element, type) {
  const typeColors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  const backgroundColorHex = typeColors[type] || "#000000";
  const backgroundColor = `rgba(${parseInt(backgroundColorHex.slice(1, 3), 16)}, ${parseInt(backgroundColorHex.slice(3, 5), 16)}, ${parseInt(backgroundColorHex.slice(5, 7), 16)}, 0.55)`;
  element.style.backgroundColor = backgroundColor;
}

pokeApi.getPokemons().then((pokemons = []) => {
  const newHtml = pokemons.map(convertPokemonToLi).join('');
  pokemonList.innerHTML = newHtml;

  const elementsToApplyColor = document.querySelectorAll('.pokemon, .item-type');
  elementsToApplyColor.forEach((element) => {
    const elementType = element.classList.contains('pokemon') ? element.classList[1] : element.textContent.toLowerCase();
    applyTypeColorToElement(element, elementType);
  });
});

