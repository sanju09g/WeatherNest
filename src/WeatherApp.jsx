import SearchBox from "./SearchBox";
import DataBox from "./DataBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState(
    {
        city: "Delhi",
        feelsLike: 24.84,
        temp:25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity:37,
        weather:"haze"
    });

    let updateData = (newInfo)=>{
        setWeatherInfo(newInfo);
    };
    return(
      <div  style={{textAlign: "center"}}>
        <h1>Weather Nest</h1>
        <SearchBox updateData={updateData}/>
        <DataBox info={weatherInfo}/>
      </div>
    );
};