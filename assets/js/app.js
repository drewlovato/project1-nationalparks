//varibles from html page
const searchParkEl = document.querySelector(".searchBar");
const searchBtnEl = document.querySelector(".searchBtn");

//variables for park biogragphy
const parkBioEl = document.querySelector(".parkBio");
const nameParkEl = document.querySelector(".namePark");
const parkDesignationEl = document.querySelector(".parkDesignation");
const parkStateEl = document.querySelector(".parkState");
const parkDescEl = document.querySelector(".parkDesc");
const latEl = document.querySelector(".lat");
const lonEl = document.querySelector(".lon");

//variable for Park Prices
const parkPrices = document.querySelector(".parkPrices");

//variable for 5 day Weather Forcast
const park5DayWeatherEl = document.querySelector(".park5DayWeather");

// variables for national parks info
let namePark = "";
let parkDesignation = "";
let parkState = "";
let parkDesc = "";
let lat = "";
let lon = "";

// api key for national parks
let apiPark = "dtbgvyHKYoiS5V9y5hZJq49IJEEH16UFSVHhvdbe";
//api key of openweather
let apiWeather = "a79cc559d0824f46711db4a217d374a2";

// event listener starts search for national park info
searchBtnEl.addEventListener("click", parkName);

// function 1 - runs national parks api
function parkName(event) {
  event.preventDefault();
  fetch(
    `https://developer.nps.gov/api/v1/parks?parkCode=${searchParkEl.value}&api_key=dtbgvyHKYoiS5V9y5hZJq49IJEEH16UFSVHhvdbe`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      namePark = data.data[0].name;
      parkDesignation = data.data[0].designation;
      parkState = data.data[0].addresses[0].stateCode;
      parkDesc = data.data[0].description;
      lat = data.data[0].latitude;
      lon = data.data[0].longitude;

      //START OF 4 ENTRANCE FEES
      // setting variable for each fee
      let fee1 = data.data[0].entranceFees[0];
      let fee2 = data.data[0].entranceFees[1];
      let fee3 = data.data[0].entranceFees[2];
      let fee4 = data.data[0].entranceFees[3];

      let allEntranceFees = [fee1, fee2, fee3, fee4];

      for (let index = 0; index < allEntranceFees.length; index++) {
        const element = allEntranceFees[index];
        console.log(element);
        let feeCostVal = element.cost;
        let feeDescVal = element.description;
        let feeTitleVal = element.title;

        allParkFeesEl = document.createElement("div");

        //prints values of fee cost to page
        var feeCostEl = document.createElement("p");
        feeCostEl.textContent = `${feeCostVal}`;
        feeCostEl.classList.add("pFeeCost");
        allParkFeesEl.append(feeCostEl);

        //prints values of fee cost to page
        var feeDescEl = document.createElement("p");
        feeDescEl.textContent = `${feeDescVal}`;
        feeDescEl.classList.add("pFeeDesc");
        allParkFeesEl.append(feeDescEl);

        //prints values of title cost to page
        var feeTitleEl = document.createElement("p");
        feeTitleEl.textContent = `${feeTitleVal}`;
        feeTitleEl.classList.add("pTitleDesc");
        allParkFeesEl.append(feeTitleEl);

        parkPrices.append(allParkFeesEl);
      }

      //pricing
      parkWeather();
    });
}

// function 2 - runs open weather api
function parkWeather() {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hour&units=imperial&appid=a79cc559d0824f46711db4a217d374a2`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(namePark, parkDesc);

      //prints values from first function to the page
      nameParkEl.textContent = `${namePark}`;
      parkDesignationEl.textContent = `${parkDesignation}`;
      parkStateEl.textContent = `STATE: ${parkState}`;
      parkDescEl.textContent = `${parkDesc}`;
      latEl.textContent = `${lat}`;
      lonEl.textContent = `${lon}`;

      // START OF 5 DAY WEATHER
      // setting variables for each day
      let day1 = data.daily[1];
      let day2 = data.daily[2];
      let day3 = data.daily[3];
      let day4 = data.daily[4];
      let day5 = data.daily[5];

      let futureWeather = [day1, day2, day3, day4, day5];

      for (let index = 0; index < futureWeather.length; index++) {
        const element = futureWeather[index];
        console.log(element);
        let futureTempVal = element.temp.day;
        let futureHumidityVal = element.humidity;
        let futureWindVal = element.wind_speed;
        let futureDescVal = element.weather[0].description;
        let futureIconVal = element.weather[0].icon;
        let futureDateVal = moment()
          .add(index + 1, "days")
          .format("LLL");

        weatherCardEl = document.createElement("div");
        // add class here

        // Date Element Chunk (Part of Card)
        var futureDateEl = document.createElement("p");
        futureDateEl.textContent = `${futureDateVal}`;
        futureDateEl.classList.add("pDate");
        weatherCardEl.append(futureDateEl);

        // Weather Icon Element Chunk (Part of Card)
        var futureIconEl = document.createElement("img");
        futureIconEl.src = `http://openweathermap.org/img/wn/${futureIconVal}@2x.png`;
        futureIconEl.alt = futureIconVal;
        weatherCardEl.append(futureIconEl);

        // displays future temp for the next 5 days
        var futureTempEl = document.createElement("p");
        futureTempEl.textContent = `${futureTempVal}`;
        futureTempEl.classList.add("pTemp");
        weatherCardEl.append(futureTempEl);

        // displays future humidity for the next 5 days
        var futureHumidityEl = document.createElement("p");
        futureHumidityEl.textContent = `${futureHumidityVal}`;
        futureHumidityEl.classList.add("pHumidity");
        weatherCardEl.append(futureHumidityEl);

        // displays future humidity for the next 5 days
        var futureWindEl = document.createElement("p");
        futureWindEl.textContent = `${futureWindVal}`;
        futureWindEl.classList.add("pWind");
        weatherCardEl.append(futureWindEl);

        // displays future humidity for the next 5 days
        var futureDescEl = document.createElement("p");
        futureDescEl.textContent = `${futureDescVal}`;
        futureDescEl.classList.add("pDate");
        weatherCardEl.append(futureDescEl);

        park5DayWeatherEl.append(weatherCardEl);
      }
    });
  return;
}
