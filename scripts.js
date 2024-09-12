document.addEventListener('DOMContentLoaded', function() {
    // JSON de exemplo com os dados dos jogos
    const jsonData = {
        "games": [
            {
                "title": "Jogos ao Vivo",
                "date": new Date().toLocaleString(),
                "url": "https://multicanais.to/futebol-ao-vivo"
            }
        ]
    };

    const gamesContainer = document.getElementById('games-container');

    jsonData.games.forEach(game => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${game.title} - ${game.date}</span>
            <a href="${game.url}" class="btn" target="_blank">Assistir</a>
        `;
        gamesContainer.appendChild(li);
    });
});
