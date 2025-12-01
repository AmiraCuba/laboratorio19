fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .then(respuesta => respuesta.json())
    .then(data => {
        console.log(`La altura de ${data.name} es ${data.height}`)
        console.log(`El peso de ${data.name} es ${data.weight}`)
    })
    .catch(e => console.error("Error:", e));