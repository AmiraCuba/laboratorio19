boton.onclick = async () => {
    let p = input.value.toLowerCase()
    let r = await fetch(`https://pokeapi.co/api/v2/pokemon/${p}`)
    let d = await r.json()
    stats.innerHTML = ""
    d.stats.forEach(s => {
        let li = document.createElement("li")
        li.textContent = `${s.stat.name}: ${s.base_stat}`
        stats.appendChild(li)
    })
}