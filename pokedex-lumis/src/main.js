import { renderStructure } from "./app.js";
import { pokemonService } from "./services/api.js";
import { PokemonList } from "./components/pokemonList/index.js";
import { initSearchBar } from "./components/searchBar/controller.js";
import { state } from "./store.js";

async function init() {
  renderStructure();

  const listContainer = document.querySelector("#list-root");

  try {
    state.allPokemons = await pokemonService.fetchPokemons(
      0,
      state.itemsPerPage,
    );

    listContainer.innerHTML = PokemonList(state.allPokemons);

    initSearchBar((term) => {
      state.filteredPokemons = state.allPokemons.filter((pokemon) => {
        return (
          pokemon.name.includes(term) ||
          String(pokemon.id).includes(term) ||
          pokemon.types.some((t) => t.includes(term)) ||
          pokemon.abilities?.some((a) => a.includes(term))
        );
      });

      const dataToRender = term ? state.filteredPokemons : state.allPokemons;
      listContainer.innerHTML = PokemonList(dataToRender);
    });
  } catch (error) {
    listContainer.innerHTML = `<div class="py-20 text-center text-red-500">Erro fatal ao carregar Pokédex.</div>`;
  }
}

init();
