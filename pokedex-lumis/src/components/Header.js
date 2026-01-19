export function Header() {
  return `
    <header class="w-full bg-white border-b border-border-gray p-6">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <img src="/pokedex-logo.svg" alt="Pokédex Logo" class="h-10 w-auto" />
        </div>

        <nav class="flex gap-4">
          <button class="bg-pill-bg text-text-main px-4 py-2 rounded-xl text-sm">
            Home
          </button>
          <button class="text-main px-4 py-2 text-sm transition-colors">
            Pokédex
          </button>
        </nav>
      </div>
    </header>
  `;
}
