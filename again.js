const API_KEY=`3265874a2c77ae4a04bb96236a642d2f`
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// const API = `https://api.openweathermap.org/data/2.5/weather?`;

const form=document.querySelector("form");
const search=document.querySelector("#search");
const weather=document.querySelector("#weather");


const getWeather=async(city)=>{
    weather.innerHTML=`<h2>Loading...<h2>`
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    // console.log(response)
    const data= await response.json();
    // console.log(data)
    return showWeather(data)
}

const showWeather=(data)=>{
    // console.log(data)
    if(data.cod=="404"){
        weather.innerHTML=`<h2>City not found<h2>`
        return;
    }
weather.innerHTML=`<div>
    <img src="./image/cloud.png ,,"temporary url"data.weather[0].icon" alt="">
</div>

<div>
    <h2>${data.main.temp} &deg;C</h2> 
    <h4>${data.weather[0].main}</h4>  
</div>`
}



form.addEventListener("submit",
function(event){
    getWeather(search.value)
    event.preventDefault()
})