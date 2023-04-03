import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import ButtonBox from './component/ButtonBox';
import ClipLoader from 'react-spinners/ClipLoader';

// 1. 앱이 실행되자 마자 현재위치 기반의 날씨가 보인다
// 2. 날씨 상태 정보에는 도시, 섭씨, 화씨
// 3. 5개의 버튼(1개는 현재 위치, 4개는 다른 도시)
// 4. 도시 버튼을 클릭하면 도시별 날씨가 나옴
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나옴
// 6. 로딩 스피너

function App() {
  const [weather, setWeather] = useState(null); // weather 데이터를 넣을 state 만들기
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false); // loading 값이 true 일 때에만 로딩스피너가 보이게 됨
  const cities = ['paris', 'new york', 'tokyo', 'seoul'];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon); // lat, lon을 인자로 넘겨주면서 getWeatherByCurrentLocation 함수를 호출
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e919bb3b5b58a2b3ce50ef98fb148e5a&units=metric  `;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    // console.log('data', data);
    setWeather(data); // weather state에 데이터를 넣어줘
    setLoading(false);
  }; // getWeatherByCurrentLocation 함수는 lat, lon을 매개변수로 넘겨받아 url을 생성하는 작업을 함

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e919bb3b5b58a2b3ce50ef98fb148e5a&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    // console.log('data', data);
    setWeather(data); // weather state에 데이터를 넣어줘
    setLoading(false);
  };

  useEffect(() => {
    if (city == '') {
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
          <WeatherBox weather={weather} />
          <ButtonBox cities={cities} setCity={setCity} />
        </div>
      )}
    </div>
  );
}

export default App;
