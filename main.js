window.onload = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
        .then(res => res.json())
        .then(data => {
            const imgs = data.results
            const list = document.getElementById('pokemon-card')

            imgs.forEach((pokemon, index) => {
                list.innerHTML += `<li> <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png" alt="" /> ${pokemon.name}</li>`
            })
        })
}