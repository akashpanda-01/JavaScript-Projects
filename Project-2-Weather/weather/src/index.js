const apiKey = "8911b6a6faf6edac801ca2580eac032f";

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;


    const searchbox =document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src ="/public/images/clouds.png";
        } else if ( data.weather[0].main == "Clear"){
            weatherIcon.src = "/public/images/clear.png";
        } else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "/public/images/rain.png";
        } else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "/public/images/drizzel.png";
        } else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "/public/images/mist.png";

        
            
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

    
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchbox.value);
});




