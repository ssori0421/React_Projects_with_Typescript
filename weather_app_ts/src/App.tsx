import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';

import ClipLoader from 'react-spinners/ClipLoader';
import ButtonBox from './component/ButtonBox';
import { IWeather } from './types/weather';


function App() {
  const [weather, setWeather] = useState<IWeather>();
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const cities = ['paris', 'new york', 'tokyo', 'seoul'];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat: number, lon: number) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e919bb3b5b58a2b3ce50ef98fb148e5a&units=metric  `;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e919bb3b5b58a2b3ce50ef98fb148e5a&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    if (city === '') {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div>
      {loading ? (
        <div className='weatherContainer'>
          <ClipLoader color='#000000' loading={loading} size={150} />
        </div>
      ) : (
        <div className='weatherContainer'>
          {weather && <WeatherBox weather={weather} />}
          <ButtonBox cities={cities} setCity={setCity} />
        </div>
      )}
    </div>
  );
}

export default App;
