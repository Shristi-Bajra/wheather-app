import React,{ useState } from 'react';
import './WheatherApp.css';
import sunny_icon from"../Assests/sunny.png";
import search_icon from'../Assests/search.png';
import cloudy_icon from'../Assests/cloudy.png';
import scattered_cloud_icon from'../Assests/scattered_cloud.png';
import broken_cloud_icon from'../Assests/broken_cloud.png';
import drizzle_icon from'../Assests/drizzle.jpg';
import rainy_icon from'../Assests/rainy.png';
import thunderstrome_icon from'../Assests/thunderstrome.png';
import snow_icon from'../Assests/snow.png';
import mist_icon from'../Assests/mist.png';
import humidity_icon from'../Assests/humidity.png';
import wind_icon from'../Assests/wind.png';
/* import background-image from '../Assests/img_1.jpg';
 */




const WheatherApp = () => {
  const [wicon,setWicon]=useState(sunny_icon);
  let api_key="6fd5aa4a927442eb7df4e0c021ec03ed";

  const search=async()=>{
      const element=document.getElementsByClassName("cityInput");
      if(element[0].value==="")
      {
        return 0;
      }
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&APPID=${api_key}`;

      let response=await fetch(url);
      let data=await response.json();

      const humidity=document.getElementsByClassName("humidity-percent");
      const wind=document.getElementsByClassName("wind-rate");
      const temperature=document.getElementsByClassName("weather-temp");
      const location=document.getElementsByClassName("weather-location");

      humidity[0].innerHTML=data.main.humidity+" %";
      wind[0].innerHTML=Math.floor(data.wind.speed)+" km/hr";
      temperature[0].innerHTML=Math.floor(data.main.temp)+"°C";
      location[0].innerHTML=data.name;

      /* if (humidity.length > 0) {
        humidity[0].innerHTML = data.main.humidity + " %";
    }
    if (wind.length > 0) {
        wind[0].innerHTML = Math.floor(data.wind.speed) + " km/hr";
    }
    if (temperature.length > 0) {
        temperature[0].innerHTML = Math.floor(data.main.temp) + "°C";
    }
    if (location.length > 0) {
        location[0].innerHTML = data.name;
    } */
      
      if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n")
      {
        setWicon(sunny_icon);
      }
      else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n")
      {
        setWicon(cloudy_icon);
      }
      else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n")
      {
          setWicon(scattered_cloud_icon)
      }
      else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n")
      {
        setWicon(broken_cloud_icon)
      }
      else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n"){
        setWicon(drizzle_icon)
      }
      else if(data.weather[0].icon==="10d"||data.weather[0].icon==="10n"){
        setWicon(rainy_icon)
      }
      else if(data.weather[0].icon==="11d"||data.weather[0].icon==="11n"){
        setWicon(thunderstrome_icon)
      }
      else if(data.weather[0].icon==="13d"||data.weather[0].icon==="13n"){
        setWicon(snow_icon)
      } 
      else
      {
        setWicon(mist_icon)
      }
  }
  return (
    <div className='container'>
      <div className="top-bar">
          <input type="text" className="cityInput" placeholder='Search'></input>
          <div className='search-icon' onClick={search}>
              <img src={search_icon} alt=""></img>
          </div>
        </div>
        <div className='weather-image'>
          <img src={wicon} alt="" width="150" height="150"></img>
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">Kathmandu</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" className="icon" width="50" height="50"></img>
              <div className="data">
                <div className="humidity-percent">64%</div>
                <div className="text">Humidity</div>
              </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" className="icon" width="50" height="50"></img>
              <div className="data">
                <div className="wind-rate">18km/hr</div>
                <div className="text">Wind-speed</div>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default WheatherApp
