import { pokemonService } from "../services/api.js";
import { state } from "../store.js";

export async function getPaginationData(pageNumber) {
  const offset = pageNumber * state.itemsPerPage;
  const isTypeMode = state.searchContext === "type";

  const pokemons = isTypeMode
    ? await pokemonService.fetchByType(state.currentType, offset)
    : await pokemonService.fetchPokemons(offset, state.itemsPerPage);

  const isLastPage = isTypeMode
    ? pokemons.length < state.itemsPerPage
    : offset + state.itemsPerPage >= 1025;

  return {
    pokemons,
    isLastPage,
    newPage: pageNumber,
  };
}
