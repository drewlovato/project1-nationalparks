const searchParkEl = document.querySelector('.searchBar')
const searchBtnEl = document.querySelector('.searchBtn')

searchBtnEl.addEventListener('click', parkName)

let apiPark = 'dtbgvyHKYoiS5V9y5hZJq49IJEEH16UFSVHhvdbe'
let apiWeather = "a79cc559d0824f46711db4a217d374a2"
let namePark = ''
let parkDesc = ''
let lat = ''
let lon = ''


function parkName() {
  fetch (`https://developer.nps.gov/api/v1/parks?parkCode=${searchParkEl.value}&api_key=dtbgvyHKYoiS5V9y5hZJq49IJEEH16UFSVHhvdbe`)
  .then((response) => response.json())
  .then ((data) => {
    console.log(data)
      namePark= data.data[0].name
      parkDesc = data.data[0].description
      lat = data.data[0].latitude
      lon = data.data[0].longitude

     parkWeather()
  })
}

function parkWeather() { 
fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hour&units=imperial&appid=a79cc559d0824f46711db4a217d374a2`)
    .then ((response) => response.json())
    .then ((data) => {
        console.log(data)
        console.log(namePark, parkDesc)

    })
}
// 