// Search Pokemon , working with API

fetchData();

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonImage = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    const errorMessageElement = document.getElementById("errorMessage");

    imgElement.src = pokemonImage;
    imgElement.style.display = "block";
    errorMessageElement.style.display = "none";
  } catch (error) {
    const errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.textContent = "Invalid Pokemon Name";
    errorMessageElement.style.display = "block";
    document.getElementById("pokemonSprite").style.display = "none";
  }
}
