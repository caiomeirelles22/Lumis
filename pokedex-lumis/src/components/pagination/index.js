export function Pagination() {
  return `
    <nav class="flex items-center justify-center gap-2 md:gap-4 text-sm font-bold">
      <button id="prev-page" class="flex items-center gap-1 text-text-secondary hover:text-text-main transition-colors disabled:opacity-30">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Anterior
      </button>

      <div class="flex items-center gap-1">
        <button class="w-8 h-8 flex items-center justify-center rounded-full bg-text-active text-white">1</button>
        <button class="w-8 h-8 flex items-center justify-center rounded-full text-text-secondary hover:bg-pill-bg transition-colors">2</button>
        <button class="w-8 h-8 flex items-center justify-center rounded-full text-text-secondary hover:bg-pill-bg transition-colors">3</button>
      </div>

      <button id="next-page" class="flex items-center gap-1 text-text-secondary hover:text-text-main transition-colors">
        Próximo
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  `;
}