import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateData}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   const API_KEY = "5727598832837ab8ccf780a4847bc955";
   
   let getWeatherInfo = async() => {

    try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
     
        let result = {
         city: city,
         temp: jsonResponse.main.temp,
         tempMin: jsonResponse.main.temp_min,
         tempMax: jsonResponse.main.temp_max,
         humidity: jsonResponse.main.humidity,
         feelsLike: jsonResponse.main.feels_like,
         weather: jsonResponse.weather[0].description
        }
   console.log(result);
   setError(false);
   return result;
   } catch(err){
    throw err;
   }
   };
   
    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
           let newInfo = await getWeatherInfo();
           updateData(newInfo);
        }
        catch (err){
            setError(true);
            console.log(err);
        }
    };
    return(
         <div className='SearchBox'>
            <h3>Search Weather </h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="Search city" variant="outlined" required value={city} onChange={handleChange}/> <br /><br />
            <Button variant="contained" type='submit'>
        SEARCH
      </Button>
      {error? <p style={{color:"red"}}>No Such Place exists!</p>:""}
            </form> 
           
         </div>
    );
}