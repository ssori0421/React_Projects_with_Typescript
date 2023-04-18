import React from 'react';
import { IWeather } from '../types/weather';

const WeatherBox = ({ weather }: { weather: IWeather }) => {
  return (
    <div className='weatherWrap'>
      <div>{weather.name}</div>
      <h2>
        {weather.main.temp}℃ /{weather.main.temp / 1.8}℉
      </h2>
      <h3>{weather.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
