import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { SearchBar } from "./components/searchBar/index.js";
import { Pagination } from "./components/pagination/index.js";

export function renderStructure() {
  const app = document.querySelector("#app");
  app.className = "min-h-screen flex flex-col";
  
  app.innerHTML = `
    <div id="header-root"></div>
    <main class="max-w-7xl mx-auto p-6 flex-1 w-full">
      <section id="search-root" class="my-10"></section>
      <section id="list-root">
        <div class="flex justify-center py-20 text-text-secondary animate-pulse text-sm font-bold uppercase tracking-wider">
          Carregando Pokémons...
        </div>
      </section>
      <section id="pagination-root" class="mt-12"></section>
    </main>
    <div id="footer-root"></div>
  `;

  document.querySelector("#header-root").innerHTML = Header();
  document.querySelector("#search-root").innerHTML = SearchBar();
  document.querySelector("#pagination-root").innerHTML = Pagination();
  document.querySelector("#footer-root").innerHTML = Footer();
}