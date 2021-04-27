fetch("https://pokeapi.co/api/v2/pokemon/1")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    const pokemon = response;

    const naamDiv = document.querySelector(".card-title");
    naamDiv.textContent = `${pokemon.id}: ${pokemon.name}`;

    const imgDiv = document.querySelector(".card-img-top");
    imgDiv.src = pokemon.sprites.front_default;

    const cardElement = document.querySelector(".card");
    cardElement.style.visibility = "visible";
  });
