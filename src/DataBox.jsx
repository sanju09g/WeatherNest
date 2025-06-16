import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./DataBox.css";

export default function DataBox({info}){
    let INIT_URL = "https://images.unsplash.com/photo-1561553543-e4c7b608b98d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1bm55fGVufDB8fDB8fHww";
    const COLD_URL = "https://images.unsplash.com/photo-1477468572316-36979010099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1605035015406-54c130d0bf89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnl8ZW58MHx8MHx8fDA%3D";
    return (
        <div className="DataBox" >
   <hr style={{ borderTop: "1px solid lightgrey" }} />
     <br /><br />
          <div  className="cardContainer">
            <Card sx={{ minWidth: 350 }}>
      <CardMedia
        sx={{ height: 160 }}
        image={info.humidity>80?RAIN_URL:info.temp>25?HOT_URL:COLD_URL}
        title="weather"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' ,lineHeight:"30px"}} component={"span"}>
         <div>Temparature = {info.temp} &deg;C</div>
         <div>Humidity = {info.humidity}</div>
         <div>Min = {info.tempMin} &deg;C</div>
         <div>Max = {info.tempMax} &deg;C</div>
         <div>Feels like = {info.feelsLike} &deg;C</div>
         <div style={{display:"flex",justifyContent:"center",alignItems:"center", lineHeight:"50px"}}> <b>{info.weather}</b>&nbsp;&nbsp;{info.humidity>80?<ThunderstormIcon/>:info.temp>25?<WbSunnyIcon/>:<AcUnitIcon/>}</div>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
</div>
        
    );
};