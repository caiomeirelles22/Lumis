const app = document.querySelector("#app");

app.innerHTML = `
  <header id="header-container" class="w-full border-b border-gray-100 p-4">
    <div class="max-w-7xl mx-auto font-bold">Header aqui (Logo e Menu)</div>
  </header>

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

console.log("Estrutura final para o Commit 1 renderizada!");
