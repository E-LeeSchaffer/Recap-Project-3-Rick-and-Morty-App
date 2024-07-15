export function searchCharacterInSearchBar(searchQuery, fetchCharacters) {
  const searchBar = document.querySelector('[data-js="search-bar"]');
  searchBar.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(searchBar);
    searchQuery = formData.get("query");
    page = 1;
    fetchCharacters();
  });
}
