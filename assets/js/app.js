const searchParkEl = document.querySelector('.searchBar')
const searchBtnEl = document.querySelector('.searchBtn')

searchBtnEl.addEventListener('click', parkWeather)


var apiPark = 'dtbgvyHKYoiS5V9y5hZJq49IJEEH16UFSVHhvdbe'
var apiWeather = "a79cc559d0824f46711db4a217d374a2"


function parkName() {
  fetch (`https://developer.nps.gov/api/v1/parks?parkCode=${searchParkEl.value}&api_key=dtbgvyHKYoiS5V9y5hZJq49IJEEH16UFSVHhvdbe`)
  .then((response) => response.json())
  .then ((data) => {
    console.log(data)
     const name = data[0].name
     const parkDesc = data[0].description
     const lat = data[0].latitude
     const lon = data[0].longitude

     parkWeather(name, parkDesc, lat, lon)
  })
}

//parkName()

function parkWeather() {
fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hour&units=imperial&appid=a79cc559d0824f46711db4a217d37`)
    .then ((response) => response.json())
    .then ((data) => {
        console.log(data)

    })
}