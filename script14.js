let lista = []
let i = 0
async function cargar() {
    for (let id = 1; id <= 12; id++) {
        let r = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        let d = await r.json()
        lista.push(d)
    }
    mostrar()
}
function mostrar() {
    contenedor.innerHTML = ""
    let grupo = lista.slice(i, i + 3)
    grupo.forEach(p => {
        contenedor.innerHTML += `
            <div class="card">
                <img src="${p.sprites.front_default}">
                <p>${p.name}</p>
                <p>ID: ${p.id}</p>
            </div>
        `
    })
}
sig.onclick = () => {
    if (i + 3 < 12) i += 3
    mostrar()
}
ant.onclick = () => {
    if (i - 3 >= 0) i -= 3
    mostrar()
}
cargar()