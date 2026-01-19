import { Header } from './components/Header.js';
const app = document.querySelector("#app");

app.innerHTML = `
  <div id="header-root"></div>

  <main class="max-w-7xl mx-auto p-6 flex-1">
    <section id="search-container" class="mb-10">
      Barra de busca aqui
    </section>

    <section id="pokemon-list" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      Lista de Pokémons aqui (Cards)
    </section>

    <section id="pagination-container" class="mt-12 py-8 text-center border-t border-gray-50">
      Paginação aqui
    </section>
  </main>

  <footer id="footer" class="w-full py-6 text-center text-text-secondary text-sm">
    <div class="max-w-7xl mx-auto">
      &copy; 2024 - Desenvolvido por Caio Meirelles para o Desafio Lumis
    </div>
  </footer>
`;

document.querySelector("#header-root").innerHTML = Header();
