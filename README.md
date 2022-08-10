PROJECT 1: National Parks Database


[Deployment link](https://drewlovato.github.io/project1-nationalparks/)  

USER STORY:

AS A summer traveler
I WANT to see the weather outlook, entrance fees, description, photos, and special highlights of all of the national parks in the United State SO THAT I can plan a trip accordingly


ACCEPTANCE CRITERIA:

GIVEN a national park search form WHEN I search for a national park, THEN I am presented with the park name, the date, an icon representation of weather conditions, the temperature, the humidity, and windspeed. THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity.

WHEN I search for a national park, THEN I am presented with photos of the park, a brief description of that particular park, entrance fees for the park, and the the latitude and longitude of the particular park.

WHEN I click on a national park in the search history THEN I am again presented with the weather, entrance fees, description, and lat and lon of that park.

WHEN I click on the "home" links in the navBar THEN I am brought to the homepage of the National Park Service.

GIVEN a link in the navBar for closure information, and partnership, THEN I am presented with information about park closures and NPS involvement activities from the NPS home page.

WHEN I click on the "Learn More" button near the bottom of the page, I am presented with a modal for a sign-up sheet to receive additional National Park information.



FRAMEWORKS, LANGUAGES and APIs used in deployed application:

1. HTML / CSS / JavaScript
2. BULMA for additional styling and functionality
3. NPS developer API: https://developer.nps.gov/api/v1/
4. Open Weather API 2.5 version: https://api.openweathermap.org/data/2.5/onecall


MOCK UP TOUR OF APP:

Landing page: 

<img width="677" alt="Screen Shot 2022-08-09 at 9 41 58 AM" src="https://user-images.githubusercontent.com/106923428/183698252-cdb40cc8-1540-4806-83c5-4bf9768867fd.png">

Main Page:

<img width="1277" alt="Screen Shot 2022-08-09 at 9 42 52 AM" src="https://user-images.githubusercontent.com/106923428/183698334-d007597f-3169-46fc-a2c4-2abc28ace79a.png">

Navbar with several options:

<img width="1385" alt="Screen Shot 2022-08-09 at 9 43 18 AM" src="https://user-images.githubusercontent.com/106923428/183698448-82476ba7-521a-4e4a-a945-8617740c6bb8.png">

Entrance fee card:

<img width="963" alt="Screen Shot 2022-08-09 at 9 45 03 AM" src="https://user-images.githubusercontent.com/106923428/183698546-ca283909-faee-4113-8671-d8dcdad8ab44.png">

Recent Searches Dropdown:

<img width="200" alt="Screen Shot 2022-08-09 at 9 46 03 AM" src="https://user-images.githubusercontent.com/106923428/183698652-6d6fede4-8e82-49e7-925b-32ee8cb35c7b.png">

5-Day Weather Information Cards:

<img width="1188" alt="Screen Shot 2022-08-09 at 9 45 31 AM" src="https://user-images.githubusercontent.com/106923428/183698749-76e84d6f-9660-48c1-b4df-21dcf54b988c.png">

[Click here for slide show presentation](https://docs.google.com/presentation/d/1S2Ql99rE5zYWjelTeBjODPNuvJT1EXeYCREUrtOkX10/edit#slide=id.g29f43f0a72_0_10)

[Click here for video mock up](https://drive.google.com/file/d/1tKWbkomhMl-5-rbLjahXHAHJ25yJhs1d/view?ts=62f29136)


FUTURE DEVELOPMENT:

1. Add an autocomplete function that fills in search area for users after only a few letters.  We spent several hours trying to implement one, but ultimately found it to be impossible due to our array of names being a list of separate objects.
2. Add more buttons and dropdown menus for more park informtation about camping, trails, seasonal closures, and historical anecdotes about the parks.
3. Implement a better "recent searches" system so users can look at past searches later even after closing the browser.
4. Add a functional carousel or dissolving slideshow of photos to give the page a more dynamic feel from the moment of deployment.


COLLABORATORS:
1. Andrew Lovato
2. Brendon Curry-Hobbs
3. Rod Bennett
