import { getWeather } from "./api.js";

import {
    displayWeather,
    displayError,
    clearError
} from "./ui.js";


const weatherForm = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");


weatherForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const city = cityInput.value.trim();

    if (city === "") {
        displayError("Please enter a city name.");
        return;
    }

    clearError();

    try {

        const weatherData = await getWeather(city);

        displayWeather(weatherData);

        cityInput.value = "";

    } catch (error) {

        displayError(error.message);

    }

});