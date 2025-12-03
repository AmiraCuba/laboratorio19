const boton = document.getElementById("botonEnviar");
const nombre = document.getElementById("nombre");
const idPoke = document.getElementById("inputID");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const habilidades = document.getElementById("habilidades");
const imagen = document.getElementById("imagen");   

boton.addEventListener("click", () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(idPoke.value)}`)
        .then(respuesta => respuesta.json())
        .then(data => {
            nombre.textContent = `${data.name}`;
            imagen.src = data.sprites.front_default;
            imagen.alt = data.name;
            idPoke.textContent = `ID: ${data.id}`;
            peso.textContent = `Peso: ${data.weight}`;
            altura.textContent = `Altura: ${data.height}`;
            habilidades.textContent = `Habilidades: ${data.abilities.map(habilidad => habilidad.ability.name).join(", ")}`;
        })
        .catch (error => console.log("Error: ", error));
    }
)