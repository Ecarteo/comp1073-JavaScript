// load footer info
const studentInfo = "Mateo Calderon Arce - 200630893";

document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("student-info").textContent = studentInfo;

// fetch seasonal animes
async function getSeasonalAnime() {
    try {
        const url = 'https://api.jikan.moe/v4/seasons/now'; // api call
        const response = await fetch(url);

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const result = await response.json();
        
        createGridElements(result.data);
    } catch (error) {
        console.error("Failed to fetch seasonal anime:", error);
    }
}

function createGridElements(animeList) {
    const gridContainer = document.querySelector('main');

    animeList.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.classList.add('anime-card');

        const title = anime.title_english || anime.title;
        const imageUrl = anime.images.jpg.large_image_url || anime.images.jpg.image_url;
        const score = anime.score ? `Score: ${anime.score}` : 'Score: N/A';
        const episodes = anime.episodes ? `Episodes: ${anime.episodes}` : 'Episodes: N/A';

        animeCard.innerHTML = `
            <img src="${imageUrl}" alt="${title}">
            <h3>${title}</h3>
            <p>${score}</p>
            <p>${episodes}</p>
        `;

        gridContainer.appendChild(animeCard);
    });
}

getSeasonalAnime();