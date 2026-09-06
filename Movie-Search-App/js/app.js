import { searchMovies } from "./api.js";

import {
    displayMovies,
    displayError,
    clearError
} from "./ui.js";


const movieForm = document.getElementById("movie-form");

const movieInput = document.getElementById("movie-input");


movieForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const movieName = movieInput.value.trim();


    // Check empty input
    if (movieName === "") {

        displayError("Please enter a movie name.");

        return;
    }


    clearError();


    try {

        const movieData = await searchMovies(movieName);

        displayMovies(movieData);

        movieInput.value = "";

    } catch (error) {

        displayError(error.message);

    }

});