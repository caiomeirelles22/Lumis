export function Pagination(currentPage = 0) {
  const maxButtons = 3;
  let startPage = Math.max(0, currentPage - 1);

  const pages = [];
  for (let i = 0; i < maxButtons; i++) {
    pages.push(startPage + i);
  }

  return `
    <nav class="flex items-center justify-center gap-2 md:gap-4 text-sm font-bold">
      <button id="prev-page" class="flex items-center gap-1 text-text-secondary hover:text-text-main transition-colors disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Anterior
      </button>

      <div id="page-numbers" class="flex items-center gap-1">
        ${pages
          .map(
            (page) => `
          <button 
            data-page="${page}" 
            class="w-8 h-8 flex items-center justify-center rounded-full transition-all cursor-pointer ${currentPage === page ? "bg-text-active text-white scale-110" : "text-text-secondary hover:bg-pill-bg"}"
          >
            ${page + 1}
          </button>
        `,
          )
          .join("")}
      </div>

      <button id="next-page" class="flex items-center gap-1 text-text-secondary hover:text-text-main transition-colors disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed">
        Próximo
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  `;
}
