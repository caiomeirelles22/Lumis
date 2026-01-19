import { Pagination } from "./index.js";

export function initPagination(onPageChange) {
  const paginationRoot = document.querySelector("#pagination-root");
  if (!paginationRoot) return;

  paginationRoot.addEventListener("click", (e) => {
    const target = e.target.closest("button");
    if (!target || target.disabled) return;

    if (target.id === "prev-page") return onPageChange("prev");
    if (target.id === "next-page") return onPageChange("next");

    if (target.dataset.page) {
      onPageChange(Number(target.dataset.page));
    }
  });
}

export function updatePaginationUI(currentPage, isLastPage) {
  const paginationRoot = document.querySelector("#pagination-root");
  if (!paginationRoot) return;

  paginationRoot.innerHTML = Pagination(currentPage);

  const prevBtn = document.querySelector("#prev-page");
  const nextBtn = document.querySelector("#next-page");

  if (prevBtn) prevBtn.disabled = currentPage === 0;
  if (nextBtn) nextBtn.disabled = isLastPage;
}
