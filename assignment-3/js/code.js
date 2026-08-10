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
        return result.data; // array of ~25 seasonal anime
    } catch (error) {
        console.error("Failed to fetch seasonal anime:", error);
    }
}

getSeasonalAnime();