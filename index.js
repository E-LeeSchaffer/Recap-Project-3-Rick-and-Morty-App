import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

import { NavButton } from "./components/NavButton/NavButton.js";
import { NavPagination } from "./components/NavPagination/NavPagination.js";

import { SearchBar } from "./components/SearchBar/SearchBar.js";


const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');
// const prevButton = document.querySelector('[data-js="button-prev"]');
// const nextButton = document.querySelector('[data-js="button-next"]');
const paginationContainer = document.querySelector('[data-js="pagination"]'); // const geändert.

// States
const maxPage = 42;
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
  try {
    const response = await fetch(url);

    const data = await response.json();

    cardContainer.innerHTML = "";
    data.results.forEach((character) => {
      const card = CharacterCard({
        image: character.image,
        name: character.name,
        status: character.status,
        type: character.type,
        occurrences: character.episode.length,
      });
      cardContainer.appendChild(card);
    });
    paginationContainer.textContent = `${page} / ${maxPage}`;
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}


const prevClick = () => {

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
};

const nextClick = () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }

};


function handleSearchSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  searchQuery = formData.get("query");

  page = 1;
  fetchCharacters();

});

const prevButton = NavButton("previous", prevClick);
const nextButton = NavButton("next", nextClick);

navigation.append(prevButton, paginationContainer, nextButton);

}

const searchBar = SearchBar(handleSearchSubmit);
searchBarContainer.appendChild(searchBar);


fetchCharacters();
