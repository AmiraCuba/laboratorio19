boton.onclick = async () => {
    let nombreOid = input.value.toLowerCase()
    let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombreOid}`)
    let data = await respuesta.json()
    let tipos = data.types.map(t => t.type.name).join(", ")
    resultado.innerHTML = `
        <p>${data.name}</p>
        <img src="${data.sprites.front_default}">
        <p>Tipos: ${tipos}</p>
    `
}
