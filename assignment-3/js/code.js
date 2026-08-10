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
        console.log(result.data);
        createGridElements(result.data);
    } catch (error) {
        console.error("Failed to fetch seasonal anime:", error);
    }
}

function createGridElements(animeList) {
    const gridContainer = document.querySelector('main');
    gridContainer.innerHTML = ''; // Clear existing elements

    // filter out duplicates by tracking seen mal_ids
    const seenIds = new Set();
    const uniqueAnimeList = animeList.filter(anime => {
        if (seenIds.has(anime.mal_id)) {
            return false;
        }
        seenIds.add(anime.mal_id);
        return true;
    });

    // create list wrapper
    const animeListUl = document.createElement('ul');
    animeListUl.classList.add('anime-list');

    // create list items in the HTML
    uniqueAnimeList.forEach(anime => {
        const animeCard = document.createElement('li');
        animeCard.classList.add('anime-card');

        // properties
        const titleEnglish = anime.title_english || anime.title;
        const titleJapanese = anime.title_japanese || anime.title;
        const imageUrl = anime.images.jpg.large_image_url || anime.images.jpg.image_url;
        const studio = anime.studios[0]?.name || 'Unknown Studio';

        animeCard.innerHTML = `
            <img src="${imageUrl}" alt="${titleEnglish}">
            <h3>${titleJapanese}</h3>
            <h4>${titleEnglish}</h4>
            <p><strong>Studio:</strong> ${studio}</p>
        `;

        animeListUl.appendChild(animeCard);
    });

    gridContainer.appendChild(animeListUl);
}

getSeasonalAnime();