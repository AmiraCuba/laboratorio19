const listaPokemones = document.getElementById("listaPokemones");
function cargar10pokemons() {
    for (let i = 1; i <= 10; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(respuesta => respuesta.json())
        .then(data => {
            const div = document.createElement("div");
            const nombre = document.createElement("h3");
            const img = document.createElement("img");
            const id = document.createElement("p");
            const li = document.createElement("li");
            nombre.textContent= data.name;
            img.src = data.sprites.front_default;
            img.alt = data.name;
            img.width = 150;
            id.textContent = data.id;
            div.appendChild(nombre);
            div.appendChild(img);
            div.appendChild(id);
            div.classList.add("tarjetaPokemon");
            li.appendChild(div);
            listaPokemones.appendChild(li);
        })
        .catch (error => console.log("Error: ", error));
    }  
}
cargar10pokemons();