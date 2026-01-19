import { Header } from "./components/Header.js";
import { SearchBar } from "./components/searchBar/index.js";
import { PokemonList } from "./components/pokemonList/index.js";

const app = document.querySelector("#app");

// Dados mockados para teste visual
const mockPokemons = [
  {
    name: "Bulbassauro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Bulbassauro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Bulbassauro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Bulbassauro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Bulbassauro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Bulbassauro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Bulbassauro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Bulbassauro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Bulbassauro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Bulbassauro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Bulbassauro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Bulbassauro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Bulbassauro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Bulbassauro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  // ... repita para preencher o grid
];

app.innerHTML = `
  <div id="header-root"></div>
  <main class="max-w-7xl mx-auto p-6 flex-1">
    <div id="search-root" class="my-16 md:my-10"></div>
    <div id="list-root"></div>
    <div id="pagination-root"></div>
  </main>
  <footer id="footer-root"></footer>
`;

document.querySelector("#header-root").innerHTML = Header();
document.querySelector("#search-root").innerHTML = SearchBar();
document.querySelector("#list-root").innerHTML = PokemonList(mockPokemons);
