
const zip = 92008

const url =`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=da8fde9fff32e9d616cd34ed921f71d5&units=imperial`



// select HTML elements in the document (Weather API)
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');




async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // 
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    humidity.innerHTML    = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

const capDesc = desc.split(" ").map(word => {
        let firstLetter = word.charAt(0).toUpperCase();
        return`<strong>${firstLetter}${word.slice(1)}<strong>`;
    }).join(" ")


    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    
  
//URL for 3 day forecast
const url2 = "https://api.openweathermap.org/data/2.5/forecast?zip=92008&appid=48c7c7e7511069df1c9898b940b82489&units=Imperial";

const forecastTemp = document.querySelector('#nextTemp');
const forecastTemp2 = document.querySelector('#nextTemp2');
const forecastTemp3 = document.querySelector('#nextTemp3');





async function apiFetch() {
  try {
    const response = await fetch(url2);
      // console.log(response);
    const respJson = await response.json();
      // console.log(respJson);
      displayResults2(respJson);
  } catch (error) {
      // console.log(error);
  }
}

apiFetch();

function displayResults2(weatherData2) {
  
  forecastTemp.innerHTML = `<strong>${weatherData2.list[0].main.temp.toFixed(0)}</strong>`;
  forecastTemp2.innerHTML = `<strong>${weatherData2.list[1].main.temp.toFixed(0)}</strong>`;
  forecastTemp3.innerHTML = `<strong>${weatherData2.list[2].main.temp.toFixed(0)}</strong>`;

  }
}