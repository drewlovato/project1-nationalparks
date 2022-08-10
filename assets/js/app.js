//varibles from html page
const searchParkEl = document.querySelector(".searchBar");
let searchBtnEl = document.querySelector(".searchBtn");
const imageEl = document.querySelector(".park-images");
let inputBox = document.querySelector("input");
const autoComplete = document.querySelector(".autocomplete");
const formWrapper = document.querySelector(".searchForm");

//variables for park biogragphy
const parkBioEl = document.querySelector(".parkBio");
const nameParkEl = document.querySelector(".namePark");
const parkDesignationEl = document.querySelector(".parkDesignation");
const parkStateEl = document.querySelector(".parkState");
const parkDescEl = document.querySelector(".parkDesc");
const latEl = document.querySelector(".lat");
const lonEl = document.querySelector(".lon");

//variables for symbols
let perSym = "%";
let farSym = "°F";
let windSym = "mph";

//variable for Park Prices
const parkPrices = document.querySelector(".parkPrices");

//variable for 5 day Weather Forcast
const park5DayWeatherEl = document.querySelector(".park5DayWeather");

// variables fors info
let namePark = "";
let parkDesignation = "";
let parkState = "";
let parkDesc = "";
let lat = "";
let lon = "";

let searchTerm = "";

// array for names for autocomplete:
const allParks = [
  { name: "Acadia", code: "acad" },
  { name: "Arches", code: "arch" },
  { name: "Badlands", code: "badl" },
  { name: "Big Bend", code: "bibe" },
  { name: "Biscayne", code: "bisc" },
  { name: "Bryce Canyon", code: "brca" },
  { name: "Canyonlands", code: "cany" },
  { name: "Capitol Reef", code: "care" },
  { name: "Carlsbad Caverns", code: "carl" },
  { name: "Channel Islands", code: "chis" },
  { name: "Congaree", code: "cong" },
  { name: "Crater Lake", code: "crla" },
  { name: "Cuyahoga Valley", code: "cuva" },
  { name: "Death Valley", code: "deva" },
  { name: "Denali and Preserve", code: "dena" },
  { name: "Dry Tortugas", code: "drto" },
  { name: "Everglades", code: "ever" },
  { name: "Gates of the Arctic", code: "gaar" },
  { name: "Gateway Arch", code: "gate" },
  { name: "Glacier", code: "glac" },
  { name: "Glacier Bay", code: "glba" },
  { name: "Grand Canyon", code: "grte" },
  { name: "Great Sand Dunes and Preserve", code: "grsa" },
  { name: "Great Smoky Mountains", code: "grsm" },
  { name: "Guadalupe Mountains", code: "gumo" },
  { name: "Haleakala", code: "hale" },
  { name: "Hawaii Volcanoes", code: "havo" },
  { name: "Hot Springs", code: "hosp" },
  { name: "Indiana Dunes", code: "indu" },
  { name: "Isle Royale", code: "isro" },
  { name: "Joshua Tree", code: "jotr" },
  { name: "Katmai and Preserve", code: "katm" },
  { name: "Kenai Fjords", code: "kefj" },
  { name: "Kobuk Valley", code: "kova" },
  { name: "Lake Clark", code: "lacl" },
  { name: "Lassen Volcanic", code: "lavo" },
  { name: "Mammoth Cave", code: "maca" },
  { name: "Mesa Verde", code: "meve" },
  { name: "Mount Rainier", code: "mora" },
  { name: "New River Gorge", code: "neri" },
  { name: "North Cascades", code: "noca" },
  { name: "Olympic", code: "olym" },
  { name: "Petrified Forest", code: "pefo" },
  { name: "Pinnacles", code: "pinn" },
  { name: "Redwood", code: "redw" },
  { name: "Rocky Mountain", code: "romo" },
  { name: "Saguaro", code: "sagu" },
  { name: "Shenandoah", code: "shen" },
  { name: "Theodore Roosevelt", code: "thro" },
  { name: "Virgin Islands", code: "viis" },
  { name: "Voyageurs", code: "voya" },
  { name: "White Sands", code: "whsa" },
  { name: "Wind Cave", code: "wica" },
  { name: "Wrangell-St. Elias and Preserve", code: "wrst" },
  { name: "Yellowstone", code: "yell" },
  { name: "Yosemite", code: "yose" },
  { name: "Zion", code: "zion" },
];

// api key for parks
let apiPark = "Szs3pU1jwIO2lCqBIZlSKZataVqCif2rivTNgyOw";
//api key of openweather
let apiWeather = "a79cc559d0824f46711db4a217d374a2";

// VARIABLES FOR LANDING PAGE
let query = document.querySelector("#landingPageSearch");
// let landingPageButton = document.querySelector(".searchBtn");

// FUNCTION FOR LANDING PAGE
searchBtnEl.addEventListener("click", function () {
  let url = "main.html?q=" + query.value;
  window.open(url);
});

function checkQuery() {
  var queryString = document.location.search;
  //if it exists then split like next line to get value
  //then call search function and pass that term (parkName)
  searchTerm = queryString.split("=")[1];
  parkName();
}

// event listener starts search for info
searchBtnEl.addEventListener("click", parkName);

// function 1 - runss api
function parkName(event) {
  if (event) {
    event.preventDefault();
  }
  let parkCode;
  const parkSearchTerm = searchParkEl.value || searchTerm;
  for (let i = 0; i < allParks.length; i++) {
    if (parkSearchTerm == allParks[i].name) {
      parkCode = allParks[i].code;
    }
  }
  searchTerm = "";
  fetch(
    `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=Szs3pU1jwIO2lCqBIZlSKZataVqCif2rivTNgyOw`
  )
    .then((response) => response.json())
    .then((data) => {
      namePark = data.data[0].name;
      parkDesignation = data.data[0].designation;
      parkState = data.data[0].addresses[0].stateCode;
      parkDesc = data.data[0].description;
      lat = data.data[0].latitude;
      lon = data.data[0].longitude;
      code = data.data[0].parkCode;

      // setting up local storage for recent searches function
      let searchedPark = JSON.parse(localStorage.getItem("searchedPark")) || [];
      var found = false;
      for (let i = 0; i < searchedPark.length; i++) {
        if (searchedPark[i] == searchParkEl.value) {
          found = true;
        }
      }
      if (!found) {
        searchedPark.push([code]);
        localStorage.setItem("searchedPark", JSON.stringify(searchedPark));
        renderRecentSearch();
      }

      // park photos from API

      image1 = data.data[0].images[0].url;
      image2 = data.data[0].images[1].url;
      image3 = data.data[0].images[2].url;
      image4 = data.data[0].images[3].url;

      let imageArray = [image1, image2, image3, image4];
      for (let i = 0; i < imageArray.length - 1; i++) {
        const slideShow = imageArray[i];
        imageEl.setAttribute("src", slideShow);
      }

      //START OF 4 ENTRANCE FEES
      // setting variable for each fee
      let fee1 = data.data[0].entranceFees[0];
      let fee2 = data.data[0].entranceFees[1];
      let fee3 = data.data[0].entranceFees[2];
      let fee4 = data.data[0].entranceFees[3];

      let allEntranceFees = [fee1, fee2, fee3, fee4];

      for (let index = 0; index < allEntranceFees.length - 1; index++) {
        const element = allEntranceFees[index];
        let feeCostVal = element.cost;
        let feeDescVal = element.description;
        let feeTitleVal = element.title;

        allParkFeesEl = document.createElement("div");

        //prints values of title cost to page
        var feeTitleEl = document.createElement("p");
        feeTitleEl.textContent = `${feeTitleVal}`;
        feeTitleEl.classList.add("pTitleDesc");
        allParkFeesEl.append(feeTitleEl);

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

        parkPrices.append(allParkFeesEl);
      }

      //  retrieveLocalStorage();
      parkWeather();
      // recentSearches();
    });
}

// function 2 - runs open weather api
function parkWeather() {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hour&units=imperial&appid=a79cc559d0824f46711db4a217d374a2`
  )
    .then((response) => response.json())
    .then((data) => {
      //prints values from first function to the page
      nameParkEl.textContent = `${namePark}`;
      namePark.toUpperCase(namePark);
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
        let futureTempVal = element.temp.day;
        let futureHumidityVal = element.humidity;
        let futureWindVal = element.wind_speed;
        let futureDescVal = element.weather[0].description;
        let futureIconVal = element.weather[0].icon;
        let futureDateVal = moment()
          .add(index + 1, "days")
          .format("LLL");

        weatherCardEl = document.createElement("div");
        weatherCardEl.classList.add("weatherCardContainers");

        var gaugeEl = document.createElement("div");
        gaugeEl.classList.add("divGauge");

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

        // displays future humidity for the next 5 days
        var futureDescEl = document.createElement("p");
        futureDescEl.textContent = `${futureDescVal}`;
        futureDescEl.classList.add("pDesc");
        weatherCardEl.append(futureDescEl);

        // displays future temp for the next 5 days
        var futureTempEl = document.createElement("p");
        futureTempEl.textContent = `${futureTempVal}${farSym}`;
        futureTempEl.classList.add("pTemp");
        gaugeEl.append(futureTempEl);

        // displays future humidity for the next 5 days
        var futureHumidityEl = document.createElement("p");
        futureHumidityEl.textContent = `${futureHumidityVal}${perSym}`;
        futureHumidityEl.classList.add("pHumidity");
        gaugeEl.append(futureHumidityEl);

        // displays future humidity for the next 5 days
        var futureWindEl = document.createElement("p");
        futureWindEl.textContent = `${futureWindVal} ${windSym}`;
        futureWindEl.classList.add("pWind");
        gaugeEl.append(futureWindEl);

        weatherCardEl.append(gaugeEl);
        park5DayWeatherEl.append(weatherCardEl);
      }
    });
  return;
}

let recentSearch = [];
function renderRecentSearch() {
  recentSearch.push(searchParkEl.value);
  let previousSearch = JSON.parse(localStorage.getItem("searchedPark"));
    let recentSearchOptions = document.createElement("option");
    let recentSearchContainer = document.querySelector(".recent-searches");
    recentSearchContainer.append(recentSearchOptions);
    recentSearchOptions.append(searchParkEl.value);
    recentSearchOptions.setAttribute("data-code", previousSearch);
    recentSearchOptions.classList.add(".list-searches");
    recentSearchOptions.addEventListener("click", retrieveLocalStorage);
  }

function retrieveLocalStorage(event) {
  let searchedCode = event.target.getAttribute("data-code");
  parkName(searchedCode);
  localStorage.clear();
}
//recentSearch = JSON.parse(localStorage.getItem("searchedCode")) || []
// MODAL
const signupBtn = document.querySelector("#signup");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");

signupBtn.addEventListener("click", () => {
  modal.classList.add("is-active");
});

modalBg.addEventListener("click", () => {
  modal.classList.remove("is-active");
});

checkQuery();