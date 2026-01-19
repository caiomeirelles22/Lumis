export function SearchBar() {
  return `
    <div class="flex justify-center w-full">
      <div class="relative w-full max-w-180">
        <input 
          type="text" 
          id="search-input" 
          placeholder="Faça uma busca pelo nome do pokémon"
          class="w-full h-14 bg-input-bg rounded-search px-6 pl-12 outline-none focus:ring-2 focus:ring-text-secondary/10 transition-all"
        >
        <div class="absolute left-4 top-1/2 -translate-y-1/2">
          </div>
      </div>
    </div>
  `;
}
