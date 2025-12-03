const div = document.getElementById('lista');
const ol = document.createElement('ol');
const titulo = document.createElement('h2');
titulo.textContent = "Lista de los primeros 20 pokemones";
div.appendChild(titulo);
fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then(respuesta => respuesta.json())
    .then(data => { 
        data.results.forEach(pokemon => {
            const li = document.createElement('li');
            li.textContent = pokemon.name;
            ol.appendChild(li);
        });
    })
    .catch(e => console.error("Error", e));
div.appendChild(ol);