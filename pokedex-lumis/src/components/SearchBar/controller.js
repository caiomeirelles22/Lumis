import { debounce } from "../../utils/debounce.js";

export function initSearchBar(onSearch) {
  const input = document.querySelector("#search-input");
  if (!input) return;

  const debouncedSearch = debounce((value) => {
    onSearch(value);
  }, 300);

  input.addEventListener("input", (e) => {
    debouncedSearch(e.target.value.toLowerCase().trim());
  });
}
