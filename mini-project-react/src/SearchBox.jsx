import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css';
import { useState } from 'react'; // Make sure to import useState



export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "61bb1bbc7794cbeb528268df27f15214";

    let getWeatherInfo = async () => {
        try {       
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            // throw error;
            throw(err);
        }
    }


    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);
        }catch(err){
            setError(true);
        }
    };
    return (
        <div className='SearchBox'>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" 
                label="City Name" 
                variant="outlined" 
                required value={city} 
                onChange={handleChange}/>
                <br></br>
                <br></br>
                <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                    Search
                </Button>
                {error && <p style={{color:"red"}}>City not found</p>}
            </form>
        </div>
    );
    }