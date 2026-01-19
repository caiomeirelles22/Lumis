import { pokemonService } from "../services/api.js";
import { state } from "../store.js";

export async function handleSearchLogic(term) {
  const pokemonTypes = [
    "grass",
    "fire",
    "water",
    "bug",
    "normal",
    "poison",
    "electric",
    "ground",
    "fairy",
    "fighting",
    "psychic",
    "rock",
    "ghost",
    "ice",
    "dragon",
    "dark",
    "steel",
    "flying",
  ];

  if (!term) {
    state.searchContext = "all";
    state.currentType = null;
    return { type: "LOAD_PAGE", value: 0 };
  }

  if (pokemonTypes.includes(term)) {
    state.searchContext = "type";
    state.currentType = term;
    return { type: "LOAD_PAGE", value: 0 };
  }

  const matches = state.globalIndex
    .filter((p) => p.name.includes(term) || p.id === term)
    .slice(0, 18);

  if (matches.length > 0) {
    const detailed = await Promise.all(
      matches.map((p) => pokemonService.fetchPokemonDetails(p.url)),
    );
    return { type: "RENDER_DATA", value: detailed };
  }

  return { type: "EMPTY", value: term };
}
