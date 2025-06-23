const API_KEY = `d1d22dcee4af9b20a9264e66bf1ad916`;

const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading...</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    try {
        const response = await fetch(url)
        const data = await response.json()
        showWeather(data)
    } catch (error) {
        weather.innerHTML = `<h2>Error fetching weather</h2>`
    }
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2>City not Found</h2>`
        return;
    }
    weather.innerHTML = `<div>
        <img src="./image/cloud.png" alt="">
    </div>
    <div>
        <h2>${data.main.temp} &deg;C</h2> 
        <h4>${data.weather[0].main}</h4>  
    </div>`
}

form.addEventListener("submit",
    function (event) {
        event.preventDefault();
        getWeather(search.value)
    }
)