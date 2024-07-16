export function searchCharacterInSearchBar(searchQuery, fetchCharacters, page) {
  const searchBar = document.querySelector('[data-js="search-bar"]');
  searchBar.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(searchBar);
    searchQuery.value = formData.get("query");
    page = 1;
    fetchCharacters();
  });
}

console.log(searchCharacterInSearchBar);
