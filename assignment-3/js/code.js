// load footer info
const studentInfo = "Mateo Calderon Arce - 200630893";

document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("student-info").textContent = studentInfo;

// jikan.api calls

// delay function in milliseconds
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// fetch top 200 popular anime
async function fetchPopularAnime() {
    let topAnimeList = [];

    // fetch pages 1 to 8 (25 items per page = 200 total)
    for (let page = 1; page <= 8; page++) {
        try {
            console.log(`Fetching page ${page}...`);

            // filter=bypopularity sorts by most members/popularity rank
            const url = `https://api.jikan.moe/v4/top/anime?filter=bypopularity&page=${page}`;
            const response = await fetch(url);

            if (!response.ok) {
                console.error(`Page ${page} failed: HTTP ${response.status}`);
                continue; // skip this page, try the next one
            }

            const result = await response.json();

            if (result.data) {
                topAnimeList.push(...result.data);
            }
        } catch (error) {
            console.error(`Page ${page} threw an error:`, error);
        }

        console.log("Loaded anime count:", topAnimeList.length);
        // 1 second delay between calls to avoid Jikan's rate limit
        await sleep(1000);
    }

    console.log("Loaded anime count:", topAnimeList.length);
    return topAnimeList;
}

console.log(fetchPopularAnime());