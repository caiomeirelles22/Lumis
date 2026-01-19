import { Header } from "./components/Header.js";
import { SearchBar } from "./components/searchBar/index.js";
import { PokemonList } from "./components/pokemonList/index.js";
import { Pagination } from "./components/pagination/index.js";
import { Footer } from "./components/Footer.js";
import { pokemonService } from "./services/api.js";

const app = document.querySelector("#app");
app.className = "min-h-screen flex flex-col";

app.innerHTML = `
  <div id="header-root"></div>
  <main class="max-w-7xl mx-auto p-6 flex-1 w-full">
    <section id="search-root" class="my-10"></section>
    <section id="list-root">
      <div class="flex justify-center py-20">Carregando Pokémons...</div>
    </section>
    <section id="pagination-root" class="mt-12"></section>
  </main>
  <div id="footer-root"></div>
`;

document.querySelector("#header-root").innerHTML = Header();
document.querySelector("#search-root").innerHTML = SearchBar();
document.querySelector("#pagination-root").innerHTML = Pagination();
document.querySelector("#footer-root").innerHTML = Footer();

async function renderPokemonPage(offset = 0) {
  const listContainer = document.querySelector("#list-root");

  try {
    const pokemons = await pokemonService.fetchPokemons(offset, 18);
    listContainer.innerHTML = PokemonList(pokemons);
  } catch (error) {
    listContainer.innerHTML = `
      <div class="text-center py-20 text-red-500">
        Erro ao carregar Pokémons. Por favor, tente novamente.
      </div>
    `;
  }
}

renderPokemonPage();
