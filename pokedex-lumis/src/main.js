import { renderStructure } from "./app.js";
import { pokemonService } from "./services/api.js";
import { PokemonList } from "./components/pokemonList/index.js";
import { initSearchBar } from "./components/searchBar/controller.js";
import {
  initPagination,
  updatePaginationUI,
} from "./components/pagination/controller.js";
import { state } from "./store.js";

/**
 
 * @param {number} pageNumber
 */
async function loadPage(pageNumber) {
  const listContainer = document.querySelector("#list-root");
  const paginationRoot = document.querySelector("#pagination-root");

  listContainer.innerHTML = `
    <div class="col-span-full py-20 text-center animate-pulse text-text-secondary text-xs font-bold uppercase tracking-wider">
      Carregando Página ${pageNumber + 1}...
    </div>
  `;

  const offset = pageNumber * state.itemsPerPage;

  try {
    state.allPokemons = await pokemonService.fetchPokemons(
      offset,
      state.itemsPerPage,
    );
    state.currentPage = pageNumber;

    listContainer.innerHTML = PokemonList(state.allPokemons);

    const isLastPage = offset + state.itemsPerPage >= 1025;
    updatePaginationUI(state.currentPage, isLastPage);

    paginationRoot.classList.remove("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    listContainer.innerHTML = `
      <div class="col-span-full py-20 text-center text-red-500 font-bold text-xs uppercase tracking-wider">
        Erro ao carregar a página. Verifique sua conexão.
      </div>
    `;
  }
}

async function init() {
  renderStructure();

  await loadPage(0);

  pokemonService.fetchAllNames().then((index) => {
    state.globalIndex = index;
  });

  initPagination((action) => {
    let newPage;

    if (action === "next") {
      newPage = state.currentPage + 1;
    } else if (action === "prev") {
      newPage = state.currentPage - 1;
    } else {
      newPage = action;
    }

    if (newPage !== state.currentPage) {
      loadPage(newPage);
    }
  });

  initSearchBar(async (term) => {
    const listContainer = document.querySelector("#list-root");
    const paginationRoot = document.querySelector("#pagination-root");

    if (!term) {
      paginationRoot.classList.remove("hidden");
      listContainer.innerHTML = PokemonList(state.allPokemons);
      return;
    }

    paginationRoot.classList.add("hidden");
    listContainer.innerHTML = `
      <div class="col-span-full py-20 text-center animate-pulse text-text-secondary text-xs font-bold uppercase tracking-wider">
        Buscando na Pokédex...
      </div>
    `;

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
      listContainer.innerHTML = `
        <div class="col-span-full py-20 text-center text-text-secondary font-bold uppercase tracking-wider text-xs">
          Nenhum resultado encontrado para "${term}"
        </div>
      `;
    }
  });
}

init();
