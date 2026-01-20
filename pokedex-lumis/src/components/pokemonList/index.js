import { PokemonCard } from './pokemonCard.js';

export function PokemonList(pokemons) {
  return `
    <div id="pokemon-grid" class="flex flex-wrap justify-center gap-6">
      ${pokemons.map(pokemon => PokemonCard(pokemon)).join('')}
    </div>
  `;
}