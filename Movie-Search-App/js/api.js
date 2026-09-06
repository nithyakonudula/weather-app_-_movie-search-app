const API_KEY = "b7604b67";

const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(movieName) {

    const url =
        `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(movieName)}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Unable to connect to movie API");
    }

    const data = await response.json();

    if (data.Response === "False") {
        throw new Error(data.Error);
    }

    return data;
}