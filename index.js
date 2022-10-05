let currentTime = new Date();

function formattedTime(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();
  let currentHours = date.getHours();
  let currentMinutes = date.getMinutes();

  return `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}, ${currentHours}:${currentMinutes}`;
}
let formatted = document.querySelector("#day-time");
let newDate = formattedTime(currentTime);
formatted.innerHTML = newDate;

function replaceCity(event) {
  let newCityName = document.querySelector("#cityName");
  let oldCityName = document.querySelector("#showedCity");
  event.preventDefault();
  oldCityName.innerHTML = newCityName.value;
  let apiKey = "8944afa6845bd7c413a687258d3211ef";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCityName.value}&appid=${apiKey}&units=metric`;
  function showWeather(response) {
    console.log(response);
    console.log(Math.round(response.data.main.temp));
    let temp = Math.round(response.data.main.temp);
    let newTemp = document.querySelector("#showedCityTemp");
    newTemp.innerHTML = `${temp}`;
    let formatted = document.querySelector("#day-time");
    let localTime = new Date() + response.data.sys.timezone;
    console.log(localTime);
    formatted.innerHTML = newDate;
  }
  axios.get(apiUrl).then(showWeather);
}

let submitButton = document.querySelector("#searchButton");
submitButton.addEventListener("click", replaceCity);

function getPosition(position) {
  let latit = position.coords.latitude;
  let longit = position.coords.longitude;
  console.log(latit);
  console.log(longit);
}

navigator.geolocation.getCurrentPosition(getPosition);
