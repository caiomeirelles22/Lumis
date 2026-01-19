export function initSearchBar(onSearch) {
  const input = document.querySelector('#search-input');
  
  input.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    onSearch(value);
  });
}