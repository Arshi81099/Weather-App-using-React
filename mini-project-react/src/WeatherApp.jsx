import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: 'New York',
        feelsLike: 80,
        weather: 'Sunny',
        temp: 75,
        humidity: 50,
        tempMax: 80,
        tempMin: 70,
    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>Weather App by Arshi</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}