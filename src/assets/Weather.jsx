import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";





const Weather = () => {
  const [weather, setWeather] = useState({});

  const [ isFar, setIsFar ] = useState(true)

  useEffect(() => {
    const success = (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=286d15f487a41373f770d9a24be18974`
        )
        .then((res) => setWeather(res.data));
    };

    navigator.geolocation.getCurrentPosition(success);
  }, []);

  console.log(weather);


  //295 K − 273.15 = 21,85 °C



  return (
    
    <Fragment>
        
  <div className="target">
    

      <h1 className="title">Weather App</h1>
      <h1>
         {weather?.name}, {weather.sys?.country}
      </h1>



    <div className="info-imgtemp">


      <div className="img-temp">

        <div className="img-weather">
            <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
        </div>

        <h1 className="temp"> 
           {isFar ? (`${(weather.main?.temp-273.15).toFixed(2)} C°`) : (`${(weather.main?.temp-220.306).toFixed(2)} F°`) }
        </h1>

       </div> 



      <div className="inf">  
      <h2>
        <img src="wind.png" alt="" />{' '} 
        <b>Wind Speed: </b>
        {(`${weather.wind?.speed} m/s`)}
      </h2>

      <h2>
        <img src="cloud.png" alt="" />{' '} 
        <b>Clouds: </b>
        {(`${weather.clouds?.all}%`)}
      </h2>

      <h2>
       <img src="thermom.png" alt="" />{' '} 
        <b>Humidity: </b>
        {weather.main?.humidity}%
      </h2>

      <h2>
        <img src="drop.png" alt="" />{' '} 
        <b>Pressure: </b>
        {weather.main?.pressure} mb
      </h2>
    </div>  

    </div> 
      <button className="but" onClick={() => setIsFar(!isFar)}>C° / F°</button>
    </div>

    
    
    </Fragment>
  );
};

export default Weather;