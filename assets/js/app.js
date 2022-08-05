//varibles from html page
const searchParkEl = document.querySelector(".searchBar");
const searchBtnEl = document.querySelector(".searchBtn");
const imageEl = document.querySelector(".park-images")
let inputBox = document.querySelector("input")


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


// array for national park names for autosearch:
// array for autocomplete
const allParks = [ 
  {
    name: "Acadia National Park", 
    code: "acad"
  }, 
  { 
    name: "Zion National Park", 
    code: "zion"
  },

  {"Arches National Park": "arch"},
  {"Badlands National Park": "badl"},
  {"Big Bend National Park": "bibe"}, 
  {"Biscayne National Park": "bisc"}, 
]

  // "Black Canyon of the Gunnison National Park", "Bryce Canyon National Park", "Canyonlands National Park", "Capitol Reef National Park", "Carlsbad Caverns National Park", "Channel Islands National Park", "Congaree National Park", "Crater Lake National Park", "Cuyahoga Valley National Park", "Death Valley National Park", "Denali National Park and Preserve", "Dry Tortugas National Park", "Everglades National Park", "Gates of the Arctic National Park", "Gateway Arch National Park", "Glacier National Park", "Glacier Bay National Park", "Grand Canyon National Park", "Grand Teton National Park", "Great Basin National Park", "Great Sand Dunes National Park and Preserve", "Great Smoky Mountains National Park", "Guadalupe Mountains National Park", "Haleakala National Park", "Hawaii Volcanoes National Park", "Hot Springs National Park", "Indiana Dunes National Park", "Isle Royale National Park", "Joshua Tree National Park", "Katmai National Park and Preserve", "Kenai Fjords National Park", "Kings Canyon National Park", "Kobuk Valley National Park", "Lake Clark National Park", "Lassen Volcanic National Park", "Mammoth Cave National Park", "Mesa Verde National Park", "Mount Rainier National Park", "National Park of American Samoa", "New River Gorge National Park", "North Cascades National Park", "Olympic National Park", "Petrified Forest National Park", "Pinnacles National Park", "Redwood National Park", "Rocky Mountain National Park",  "Saguaro National Park", "Sequoia National Park", "Shenandoah National Park", "Theodore Roosevelt National Park", "Virgin Islands National Park", "Voyageurs National Park", "White Sands National Park", "Wind Cave National Park", "Wrangell-St. Elias National Park and Preserve", "Yellowstone National Park", "Yosemite National Park", "Zion National Park"]

// key events for autocomplete searchbar.  Showing only values types by users.
inputBox.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArray = [];
  if(userData) {
    emptyArray = allParks.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return data = '<li>' + data + '</li>';
    });
    console.log(emptyArray)
    searchWrapper.classList.add('active')
  } else {
    searchWrapper.classList.remove('active')
  }
  showSugggestions(emptyArray);
  let allList = suggBox.querySelectorAll("li")
  for (let i = 0; i < allList.length; i++) {
    allList[i].setAttribute("onclick", "select(this)")
  }
} 

// putting user selected list item in textarea
function select(element){
  let selectUserData = element.textContent
  inputBox.value = selectUserData
  searchWrapper.classList.remove('active')
}
// showing autoSuggest list
function showSugggestions(list) {
  let listData;
  if(!list.length){
    userValue = inputBox.value;
  }else {
    listData = list.join('');
    listData = '<li>' + userValue + "</li>";
  }
  suggBox.innerHTML = listData
}


// api key for national parks
let apiPark = "dtbgvyHKYoiS5V9y5hZJq49IJEEH16UFSVHhvdbe";
//api key of openweather
let apiWeather = "a79cc559d0824f46711db4a217d374a2";

// event listener starts search for national park info
searchBtnEl.addEventListener("click", parkName);


// function 1 - runs national parks api
function parkName(event) {
  event.preventDefault()
  let parkCode;
  for (let i = 0; i < allParks.length; i++) {
    console.log((allParks[i].name)) 
    if(searchParkEl.value == (allParks[i].name)) {
     parkCode = allParks[i].code
    }
    
  }
  fetch(
    `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=dtbgvyHKYoiS5V9y5hZJq49IJEEH16UFSVHhvdbe`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      namePark = data.data[0].name;
      parkDesignation = data.data[0].designation;
      parkState = data.data[0].addresses[0].stateCode;
      parkDesc = data.data[0].description;
      lat = data.data[0].latitude;
      lon = data.data[0].longitude;

      // park photos from API 

      image1 = data.data[0].images[0].url
      image2 = data.data[0].images[1].url
      image3 = data.data[0].images[2].url
      image4 = data.data[0].images[3].url
console.log("hello")
      let imageArray = [image1, image2, image3, image4]
      for (let i = 0; i < imageArray.length; i++) {
        const slideShow = imageArray[i];
        imageEl.setAttribute('src', slideShow)
        
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

      // set item to local storage
      let nameOfPark = [namePark, parkDesc, lat, lon]
      localStorage.setItem('nameOfPark', JSON.stringify(nameOfPark))

      retrieveLocalStorage()
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

// code for local storage for "recent searches"

function retrieveLocalStorage() {


}

