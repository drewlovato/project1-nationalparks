//varibles from html page
const searchParkEl = document.querySelector(".searchBar");
const searchBtnEl = document.querySelector(".searchBtn");
const imageEl = document.querySelector(".park-images");
let inputBox = document.querySelector("input");

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

// variables for national parks info
let namePark = "";
let parkDesignation = "";
let parkState = "";
let parkDesc = "";
let lat = "";
let lon = "";

// array for national park names for autosearch:
// array for autocomplete
const allParks = [
  { name: "Acadia National Park", code: "acad" },
  { name: "Arches National Park", code: "arch" },
  { name: "Badlands National Park", code: "badl" },
  { name: "Big Bend National Park", code: "bibe" },
  { name: "Biscayne National Park", code: "bisc" },
  { name: "Bryce Canyon National Park", code: "brca" },
  { name: "Canyonlands National Park", code: "cany" },
  { name: "Capitol Reef National Park", code: "care" },
  { name: "Carlsbad Caverns National Park", code: "carl" },
  { name: "Channel Islands National Park", code: "chis" },
  { name: "Congaree National Park", code: "cong" },
  { name: "Crater Lake National Park", code: "crla" },
  { name: "Cuyahoga Valley National Park", code: "cuva" },
  { name: "Death Valley National Park", code: "deva" },
  { name: "Denali National Park and Preserve", code: "dena" },
  { name: "Dry Tortugas National Park", code: "drto" },
  { name: "Everglades National Park", code: "ever" },
  { name: "Gates of the Arctic National Park", code: "gaar" },
  { name: "Gateway Arch National Park", code: "gate" },
  { name: "Glacier National Park", code: "glac" },
  { name: "Glacier Bay National Park", code: "glba" },
  { name: "Grand Canyon National Park", code: "grte" },
  { name: "Great Sand Dunes National Park and Preserve", code: "grsa" },
  { name: "Great Smoky Mountains National Park", code: "grsm" },
  { name: "Guadalupe Mountains National Park", code: "gumo" },
  { name: "Haleakala National Park", code: "hale" },
  { name: "Hawaii Volcanoes National Park", code: "havo" },
  { name: "Hot Springs National Park", code: "hosp" },
  { name: "Indiana Dunes National Park", code: "indu" },
  { name: "Isle Royale National Park", code: "isro" },
  { name: "Joshua Tree National Park", code: "jotr" },
  { name: "Katmai National Park and Preserve", code: "katm" },
  { name: "Kenai Fjords National Park", code: "kefj" },
  { name: "Kobuk Valley National Park", code: "kova" },
  { name: "Lake Clark National Park", code: "lacl" },
  { name: "Lassen Volcanic National Park", code: "lavo" },
  { name: "Mammoth Cave National Park", code: "maca" },
  { name: "Mesa Verde National Park", code: "meve" },
  { name: "Mount Rainier National Park", code: "mora" },
  { name: "New River Gorge National Park", code: "neri" },
  { name: "North Cascades National Park", code: "noca" },
  { name: "Olympic National Park", code: "olym" },
  { name: "Petrified Forest National Park", code: "pefo" },
  { name: "Pinnacles National Park", code: "pinn" },
  { name: "Redwood National Park", code: "redw" },
  { name: "Rocky Mountain National Park", code: "romo" },
  { name: "Saguaro National Park", code: "sagu" },
  { name: "Shenandoah National Park", code: "shen" },
  { name: "Theodore Roosevelt National Park", code: "thro" },
  { name: "Virgin Islands National Park", code: "viis" },
  { name: "Voyageurs National Park", code: "voya" },
  { name: "White Sands National Park", code: "whsa" },
  { name: "Wind Cave National Park", code: "wica" },
  { name: "Wrangell-St. Elias National Park and Preserve", code: "wrst" },
  { name: "Yellowstone National Park", code: "yell" },
  { name: "Yosemite National Park", code: "yose" },
  { name: "Zion National Park", code: "zion" },
];

// key events for autocomplete searchbar.  Showing only values types by users.
// inputBox.onkeyup = (e) => {
//   let userData = e.target.value;
//   let emptyArray = [];
//   if (userData) {
//     emptyArray = allParks.filter((data) => {
//       return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
//     });
//     emptyArray = emptyArray.map((data) => {
//       return (data = "<li>" + data + "</li>");
//     });
//     console.log(emptyArray);
//     searchWrapper.classList.add("active");
//   } else {
//     searchWrapper.classList.remove("active");
//   }
//   showSugggestions(emptyArray);
//   let allList = suggBox.querySelectorAll("li");
//   for (let i = 0; i < allList.length; i++) {
//     allList[i].setAttribute("onclick", "select(this)");
//   }
// };

// // putting user selected list item in textarea
// function select(element) {
//   let selectUserData = element.textContent;
//   inputBox.value = selectUserData;
//   searchWrapper.classList.remove("active");
// }
// // showing autoSuggest list
// function showSugggestions(list) {
//   let listData;
//   if (!list.length) {
//     userValue = inputBox.value;
//   } else {
//     listData = list.join("");
//     listData = "<li>" + userValue + "</li>";
//   }
//   suggBox.innerHTML = listData;
// }

// api key for national parks
let apiPark = "dtbgvyHKYoiS5V9y5hZJq49IJEEH16UFSVHhvdbe";
//api key of openweather
let apiWeather = "a79cc559d0824f46711db4a217d374a2";

// // variables for landing page
// let query = document.querySelector(".query");
// let landingPageButton = document.querySelector(".landingPageButton");

// landingPageButton.onclick = function () {
//   let url = parkName();
//   window.open(url);
// };

// event listener starts search for national park info
searchBtnEl.addEventListener("click", parkName);

// function 1 - runs national parks api
function parkName(event) {
  event.preventDefault();
  let parkCode;
  for (let i = 0; i < allParks.length; i++) {
    if (searchParkEl.value == allParks[i].name) {
      parkCode = allParks[i].code;
    }
  }

  fetch(
    `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=dtbgvyHKYoiS5V9y5hZJq49IJEEH16UFSVHhvdbe`
  )
    .then((response) => response.json())
    .then((data) => {
      namePark = data.data[0].name;
      parkDesignation = data.data[0].designation;
      parkState = data.data[0].addresses[0].stateCode;
      parkDesc = data.data[0].description;
      lat = data.data[0].latitude;
      lon = data.data[0].longitude;

      let recentSearch = JSON.parse(localStorage.getItem("recentSearch")) || [];
      var found = false;
      for (let i = 0; i < recentSearch.length; i++) {
        if (recentSearch[i][0] == searchParkEl.value) {
          found = true;
        }
        if (!found) {
          recentSearch.push([parkCode]);
          localStorage.setItem("recentSearch", JSON.stringify(recentSearch));
          parkName();
        }
      }

      // park photos from API

      image1 = data.data[0].images[0].url;
      image2 = data.data[0].images[1].url;
      image3 = data.data[0].images[2].url;
      image4 = data.data[0].images[3].url;

      let imageArray = [image1, image2, image3, image4];
      for (let i = 0; i < imageArray.length; i++) {
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

      // set item to local storage
      let searchedCode = [parkCode, namePark];
      localStorage.setItem("searchedCode", JSON.stringify(searchedCode));

      //  retrieveLocalStorage();
      parkWeather();
      recentSearches();
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

// code for local storage for "recent searches"
let recentSearch = [];
function recentSearches() {
  recentSearch.push(searchParkEl.value);
  let recentSearchListEl = document.createElement("option");
  let recentSearchEl = document.querySelector(".recent-searches");
  recentSearchEl.append(recentSearchListEl);
  recentSearchListEl.append(searchParkEl.value);
  recentSearchListEl.classList.add("list-searches");
  retrieveLocalStorage();
}

function retrieveLocalStorage() {
  let searchedParks =
    JSON.parse(localStorage.getItem("recentSearch", searchParkEl.value)) || [];
  for (let i = 0; i < searchedParks.length; i++) {
    recentSearchListEl.setAttrcibute("data-code", searchedParks[i][0]);
    recentSearchListEl.addEventListener("click", recentSearchListEl);
  }
}

recentSearch.push(searchParkEl.value);
let recentSearchListEl = document.createElement("option");
let recentSearchEl = document.querySelector(".recent-searches");
recentSearchEl.append(recentSearchListEl);
recentSearchListEl.append(searchParkEl.value);
recentSearchListEl.classList.add("list-searches");
recentSearchListEl.setAttribute("data-code", recentSearch);
recentSearchListEl.addEventListener("click", parkName());

retrieveLocalStorage();

function retrieveLocalStorage() {
  let searchedParks =
    JSON.parse(localStorage.getItem("recentSearch", searchParkEl.value)) || [];
  for (let i = 0; i < searchedParks.length; i++) {}
}

//   function searchRecentItems(event) {
//     let anotherSearch = event.target.getAttribute('data-code')
//     parkName(anotherSearch)
//   }
// retrieveLocalStorage()

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
