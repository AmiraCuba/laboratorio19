async function obtenerAlturaPeso(){
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
        const data = await respuesta.json();
        console.log(`La altura de ${data.name} es ${data.height}`);
        console.log(`El peso de ${data.name} es ${data.weight}`);
    } catch (e) {
        console.error("Error:", e);
    }
}
obtenerAlturaPeso();