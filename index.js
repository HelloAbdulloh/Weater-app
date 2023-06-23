const api = {
    key: 'a848a8e2177308c1c5eeefc38e8c4fe3',
    baseurl: 'https://api.openweathermap.org/data/2.5/'
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress',setQuery);

function setQuery(e){
    if(e.keyCode == 13){
        getResults(searchBox.value);
    }
}

function getResults(query){
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather)=>{
        return weather.json();
    }).then(displayResult);
}

function displayResult(weather){
    let city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerHTML = now;

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)} <span>℃</span>`

    let weatherEl = document.querySelector('.weather');
    weatherEl.innerHTML = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = `${Math.round(weather.main.temp_min)}℃ / ${weather.main.temp_max}℃`
}