import { renderStructure } from "./app.js";
import { pokemonService } from "./services/api.js";
import { PokemonList } from "./components/pokemonList/index.js";
import { initSearchInput } from "./components/SearchInput/controller.js";
import {
  initPagination,
  updatePaginationUI,
} from "./components/pagination/controller.js";
import { state } from "./store.js";
import { handleSearchLogic } from "./logic/searchLogic.js";
import { getPaginationData } from "./logic/paginationLogic.js";

const listContainer = () => document.querySelector("#list-root");
const paginationRoot = () => document.querySelector("#pagination-root");

function renderLoading() {
  listContainer().innerHTML = `
    <div class="col-span-full py-20 text-center animate-pulse text-text-secondary text-xs font-bold uppercase tracking-wider">
      Carregando...
    </div>
  `;
}

async function loadPage(pageNumber) {
  renderLoading();

  try {
    const { pokemons, isLastPage, newPage } =
      await getPaginationData(pageNumber);

    state.currentPage = newPage;

    listContainer().innerHTML = PokemonList(pokemons);
    updatePaginationUI(state.currentPage, isLastPage);

    paginationRoot().classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    listContainer().innerHTML = `<div class="col-span-full py-20 text-center text-red-500 font-bold text-xs uppercase tracking-wider">Erro ao carregar dados.</div>`;
  }
}

function setupAppEventListeners() {
  initPagination(async (action) => {
    let newPage = state.currentPage;
    if (action === "next") newPage++;
    else if (action === "prev") newPage--;
    else newPage = action;

    if (newPage !== state.currentPage) await loadPage(newPage);
  });

  initSearchInput(async (term) => {
    const result = await handleSearchLogic(term);

    if (result.type === "LOAD_PAGE") {
      await loadPage(result.value);
    } else if (result.type === "RENDER_DATA") {
      paginationRoot().classList.add("hidden");
      listContainer().innerHTML = PokemonList(result.value);
    } else if (result.type === "EMPTY") {
      paginationRoot().classList.add("hidden");
      listContainer().innerHTML = `
        <div class="col-span-full py-20 text-center text-text-secondary font-bold uppercase tracking-wider text-xs">
          Nenhum resultado encontrado para "${result.value}"
        </div>
      `;
    }
  });
}

async function init() {
  renderStructure();
  await loadPage(0);
  pokemonService.fetchAllNames().then((index) => (state.globalIndex = index));
  setupAppEventListeners();
}

init();
