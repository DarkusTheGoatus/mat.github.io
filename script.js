document.addEventListener("DOMContentLoaded", function () {
    let searchButton = document.getElementById("searchButton");
    let tempElement = document.getElementById("x");
    let humidityElement = document.getElementById("y");
    let windElement = document.getElementById("z");
    let backgroundButton = document.querySelector(".background button");
    let locationElement = document.getElementById("v");
    let locationInput = document.getElementById("loc");

    let light = false;

    searchButton.addEventListener("click", function () {
        let temp = Math.floor(Math.random() * 40) + 5;
        let humidity = Math.floor(Math.random() * 100) + 1;
        let wind = Math.floor(Math.random() * 50) + 1;
        let location = locationInput.value;

        tempElement.textContent = `${temp}°C`;
        humidityElement.textContent = `${humidity}%`;
        windElement.textContent = `${wind} km/hr`;
        locationElement.textContent = location || "Failed"; 
    });

    backgroundButton.addEventListener("click", function () {
        if (!light) {
            document.body.style.backgroundColor = "white";
            light = true;
        } else {
            document.body.style.backgroundColor = "";
            light = false;
        }
    });
});
