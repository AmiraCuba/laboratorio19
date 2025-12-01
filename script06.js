fetch('https://pokeapi.co/api/v2/pokemon/charizard')
    .then(response => response.json())
    .then(data => {
    const url = data.sprites.front_default;
    console.log("La URL del sprite de Charizard es:");
    console.log(url); 
    })
    .catch(e => console.error('Error:', e));