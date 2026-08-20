const button = document.querySelector("#load-pokemon");
const card = document.querySelector("#pokemon-card");

const loadPokemon = async () => {
    card.innerHTML = "<p>Loading....</p>";

    try {
        const pID = Math.floor(Math.random() * 1025) + 1;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pID}`);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const pokemon = await res.json();
        
        const types = pokemon.types.map(t => t.type.name).join(", ");
        const stats = pokemon.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join("");

        card.innerHTML = `
            <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <div class="types">
                <strong>Type:</strong> ${types}
            </div>
            <br><strong>Stats:</strong>
            <ul class="stats">
                ${stats}
            </ul>
        `;

    } catch (err) {
        card.innerHTML = '<p class="error">Could not load Pokémon.</p>';
        console.error("Failed:", err.message);
    }
};

button.addEventListener("click", loadPokemon);