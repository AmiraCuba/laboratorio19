const boton = document.getElementById("botonPokemon");
const div = document.getElementById("pokemonDatos");
const nombre = document.createElement("h4");
boton.addEventListener("click", () => {
    const pokemonRandom = Math.floor(Math.random()*898+1);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonRandom}`)
        .then(respuesta => respuesta.json())
        .then(data => {
            div.innerHTML = "";
            div.innerHTML = `<h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}" width="150px">`;
        })
        .catch (error => console.log("Error: ", error));
    }
)