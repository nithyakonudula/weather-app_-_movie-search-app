export function displayWeather(data) {

    const weatherContainer = document.getElementById("weather-container");

    const temperature = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const condition = data.weather[0].description;
    const city = data.name;
    const country = data.sys.country;

    weatherContainer.innerHTML = `
        <div class="weather-card">

            <h2>${city}, ${country}</h2>

            <p class="weather-condition">
                ${condition}
            </p>

            <div class="temperature">
                ${temperature}°C
            </div>

            <div class="weather-details">

                <div class="detail-card">
                    <div class="icon">💧</div>
                    <h3>Humidity</h3>
                    <p>${humidity}%</p>
                </div>

                <div class="detail-card">
                    <div class="icon">💨</div>
                    <h3>Wind Speed</h3>
                    <p>${windSpeed} m/s</p>
                </div>

                <div class="detail-card">
                    <div class="icon">🌡️</div>
                    <h3>Feels Like</h3>
                    <p>${feelsLike}°C</p>
                </div>

            </div>

        </div>
    `;
}


export function displayError(message) {

    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = message;
}


export function clearError() {

    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";
}