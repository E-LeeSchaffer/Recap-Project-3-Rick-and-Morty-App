// export function searchCharacterInSearchBar(searchQuery, fetchCharacters, page) {
//   const searchBar = document.querySelector('[data-js="search-bar"]');
//   searchBar.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const formData = new FormData(searchBar);
//     searchQuery.value = formData.get("query");
//     page = 1;
//     fetchCharacters();
//   });
// }

// console.log(searchCharacterInSearchBar);

// Aus html
/* <form action="" class="search-bar" data-js="search-bar">
          <input
            name="query"
            class="search-bar__input"
            type="text"
            placeholder="search characters"
            aria-label="character name"
          />
          <button class="search-bar__button" aria-label="search for character">
            <img
              class="search-bar__icon"
              src="assets/magnifying-glass.png"
              alt=""
            />
          </button>
        </form> */
