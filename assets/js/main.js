const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMore')
const limit = 12
let offset = 0
const maxRecords = 151


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

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML += newHtml
  })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
  offset += limit
  const qtdRecordsWithNexPage = offset + limit

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset
    loadPokemonItens(offset, newLimit)

    loadMoreButton.parentElement.removeChild(loadMoreButton)
  } else {
    loadPokemonItens(offset, limit)
  }
})