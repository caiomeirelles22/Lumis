import { PokemonCard } from './pokemonCard.js';

export function PokemonList(pokemons) {
  return `
    <div id="pokemon-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      ${pokemons.map(pokemon => PokemonCard(pokemon)).join('')}
    </div>
  `;
}