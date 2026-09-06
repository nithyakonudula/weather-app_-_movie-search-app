export function displayMovies(data) {

    const movieContainer = document.getElementById("movie-container");

    movieContainer.innerHTML = "";

    data.Search.forEach((movie) => {

        const movieCard = document.createElement("div");

        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img
                class="movie-poster"
                src="${
                    movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://via.placeholder.com/300x450?text=No+Poster"
                }"
                alt="${movie.Title}"
            >

            <div class="movie-info">

                <h2>${movie.Title}</h2>

                <p>
                    <strong>Year:</strong>
                    ${movie.Year}
                </p>

                <p>
                    <strong>Type:</strong>
                    ${movie.Type}
                </p>

            </div>
        `;

        movieContainer.appendChild(movieCard);
    });
}


export function displayError(message) {

    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = message;
}


export function clearError() {

    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";
}