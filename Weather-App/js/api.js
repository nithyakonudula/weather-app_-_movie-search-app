const API_KEY = "54ae1f0447ecfd3bd1c6ba27e8fcf9b5";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeather(city) {

    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("City not found");
    }

    const data = await response.json();

    return data;
}