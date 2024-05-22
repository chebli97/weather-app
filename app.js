async function getWeather() {
    const apiKey = 'd8e318f1eb7ba0a0d8e89e414d805709';
    const city = document.getElementById('input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
    const weatherResultDiv = document.getElementById('weather-result');
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      weatherResultDiv.style.display = 'none';
     
    }
  }
  
  function displayWeather(data) {
    const weatherResultDiv = document.getElementById('weather-result');
    const weatherIcon = weatherResultDiv.querySelector('.weather-icon');
    const temp = weatherResultDiv.querySelector('.temp');
    const city = weatherResultDiv.querySelector('.city');
    const humidity = weatherResultDiv.querySelector('.humidity');
    const wind = weatherResultDiv.querySelector('.wind');
  
    weatherIcon.src = `images/${data.weather[0].main.toLowerCase()}.png`;
    temp.innerText = `${data.main.temp}°C`;
    city.innerText = data.name;
    humidity.innerText = `${data.main.humidity}%`;
    wind.innerText = `${data.wind.speed} km/h`;
  
    weatherResultDiv.style.display = 'block';
  }
  