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

    pokemonService.fetchAllNames().then((index) => {
      state.globalIndex = index;
    });

    initSearchBar(async (term) => {
      if (!term) {
        listContainer.innerHTML = PokemonList(state.allPokemons);
        return;
      }

      listContainer.innerHTML = `<div class="col-span-full py-20 text-center animate-pulse text-text-secondary text-xs font-bold uppercase tracking-wider">Buscando...</div>`;

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

      if (pokemonTypes.includes(term)) {
        const typeResults = await pokemonService.fetchByType(term);
        listContainer.innerHTML = PokemonList(typeResults);
        return;
      }

      const matches = state.globalIndex
        .filter((p) => p.name.includes(term) || p.id === term)
        .slice(0, 18);

      if (matches.length > 0) {
        const detailedMatches = await Promise.all(
          matches.map((p) => pokemonService.fetchPokemonDetails(p.url)),
        );
        listContainer.innerHTML = PokemonList(detailedMatches);
      } else {
        listContainer.innerHTML = `<div class="col-span-full py-20 text-center text-text-secondary font-bold uppercase tracking-wider text-xs">Nenhum resultado encontrado</div>`;
      }
    });
  } catch (error) {
    console.error("Erro ao inicializar Pokédex:", error);
    listContainer.innerHTML = `
      <div class="col-span-full py-20 text-center text-red-500 font-bold uppercase tracking-wider text-xs">
        Houve um erro ao carregar os dados. Verifique sua conexão.
      </div>
    `;
  }
}

init();
