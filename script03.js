const IdPokemon = prompt("Ingresa el ID del pókemon");
fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemon}`)
    .then(respuesta => respuesta.json())
    .then(data => console.log(`El nombre del pókemon con ID ${IdPokemon} es ${data.name}`))
    .catch(e => console.error("Error:", e));