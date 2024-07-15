import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { searchCharacterInSearchBar } from "./components/SearchBar/SearchBar.js";

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
const maxPage = 1;
const page = { value: 1 };
const searchQuery = { value: "" };

async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(
        searchQuery.value
      )}`
    );
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
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}

searchCharacterInSearchBar(searchQuery, fetchCharacters, page);
fetchCharacters();
