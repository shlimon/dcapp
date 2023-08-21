
if (localStorage.getItem("userName")==='undefined' || localStorage.getItem("userName") === null || localStorage.getItem("userName") === ''){
    let userName = prompt("Please enter your name");
    localStorage.setItem("userName", userName);
    document.getElementById("name").innerText = `Hello, ${userName} 👋`;
}

let name = localStorage.getItem('userName');
document.getElementById("name").innerText = `Hello, ${name} 👋`;


navigator.geolocation.getCurrentPosition((position) => {

    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=df355489397b8066e9c8cba704a4e358&units=metric`)
    .then(response => response.json())
    .then(data => {
        console.log(data.main.temp, data.main.temp_max, data.weather[0].description);

        document.getElementById("current-temp").innerHTML = "<i>Current temperature: <b>"+ data.main.temp+"</b></i>";
        document.getElementById("max-temp").innerHTML = "<i>Max temperature: <b>"+ data.main.temp_max+"</b></i>";
        document.getElementById("weather-des").innerText = data.weather[0].description;
        document.getElementById("weather-icon").src =  "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";  

    });     
});

