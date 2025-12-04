btn.onclick = async () => {
    let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${inp.value.toLowerCase()}`)
    let data = await respuesta.json()
    tabla.innerHTML = `
        <tr><th>Stat</th><th>Valor</th></tr>
        ${data.stats.map(s => `<tr><td>${s.stat.name}</td><td>${s.base_stat}</td></tr>`).join("")}
    `
}