import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
let page = 1;
const searchQuery = "";

async function fetchCharacters() {
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    cardContainer.innerHTML = "";
    data.results.forEach((character) => {
      const card = CharacterCard(character);
      cardContainer.appendChild(card);
    });

    pagination.textContent = `${page} / ${maxPage}`;
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});

fetchCharacters();
