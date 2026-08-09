// load footer info
const studentInfo = "Mateo Calderon Arce - 200630893";

document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("student-info").textContent = studentInfo;

// jikan.api calls

// fetch top 200 popular anime
async function fetchPopularAnime() {
    let topAnimeList = [];

    // fetch pages 1 to 8 (25 items per page = 200 total)
    for (let page = 1; page <= 8; page++) {
        try {
            // filter=bypopularity sorts by most members/popularity rank
            const response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity&page=${page}`);

            if (!response.ok) {
                console.error(`Page ${page} failed: HTTP ${response.status}`);
                continue; // skip this page, try the next one
            }

            const result = await response.json();

            if (result.data) {
                topAnimeList.push(...result.data);
            }
        } catch (error) {
            // catch network errors
            console.error(`Page ${page} threw an error:`, error);
        }

        // pause briefly between calls to not hit Jikan's rate limit
        await new Promise(resolve => setTimeout(resolve, 400));
    }

    return topAnimeList.slice(0, 200);
}

console.log(fetchPopularAnime());