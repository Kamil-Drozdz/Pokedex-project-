const pokemonName = document.querySelector(".pokemon_name");
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonImage = document.querySelector(".pokemon_image");

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  const data = APIResponse.json();
  return data;
};

const renderPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);

  pokemonName.innerHTML = data.name;
  pokemonNumber.innerHTML = data.id;
  pokemonImage.src =
    data["spirites"]["versions"]["genration-v"]["black-white"]["animated"][
      "front_deflaut"
    ];
};

form.addEventListener("sumbit", (e) => {
  event.preventDefault();
  console.log;
});
