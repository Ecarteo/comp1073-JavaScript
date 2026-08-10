// load footer info
const studentInfo = "Mateo Calderon Arce - 200630893";

document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("student-info").textContent = studentInfo;

// modal references
const modal = document.getElementById("anime-modal");
const modalContent = document.getElementById("modal-content");
const closeModalBtn = document.getElementById("close-modal");

// close modal events
closeModalBtn.addEventListener("click", () => modal.close());

// close if user clicks on the dark backdrop area
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

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

// create DOM elements
function createGridElements(animeList) {
    const gridContainer = document.querySelector('main');
    gridContainer.innerHTML = ''; // Clear existing elements

    // filter out duplicates by tracking seen mal_ids
    const seenIds = new Set();
    const uniqueAnimeList = animeList.filter(anime => {
        if (seenIds.has(anime.mal_id)) return false;
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
            <h2>${titleJapanese}</h2>
            <h3>${titleEnglish}</h3>
            <p><strong>Studio:</strong> ${studio}</p>
        `;

        // click event to open dialog with additional API properties
        animeCard.addEventListener('click', () => {
            const synopsis = anime.synopsis || 'No synopsis available.';
            const score = anime.score || 'N/A';
            const episodes = anime.episodes || 'Unknown';
            const genres = anime.genres.map(g => g.name).join(', ') || 'N/A';

            modalContent.innerHTML = `
                <h2>${titleEnglish} (${titleJapanese})</h2>
                <p><strong>Score:</strong> ${score} / 10</p>
                <p><strong>Episodes:</strong> ${episodes}</p>
                <p><strong>Genres:</strong> ${genres}</p>
                <p><strong>Synopsis:</strong> ${synopsis}</p>
            `;

            modal.showModal(); // native browser method to display dialog
        });

        animeListUl.appendChild(animeCard);
    });

    gridContainer.appendChild(animeListUl);
}

getSeasonalAnime();