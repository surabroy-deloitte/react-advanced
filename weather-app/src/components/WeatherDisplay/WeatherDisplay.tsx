import { cityNameTextStyle, imgStyle, tempTextStyle, weatherDetGap } from "../WeatherDetails/WeatherDetailsStyle"
import weatherpng from '../../assets/weather.png'
import axios from "axios"

type WeatherDisplayProps={
    data:any
}
export const WeatherDisplay=(props:WeatherDisplayProps)=>{
        
    return(<div>
        <div style={weatherDetGap}></div>
        <div>
          <div><img src={weatherpng} style={imgStyle} /></div>
          <div style={cityNameTextStyle}>{props.data.name}</div>
          <div style={tempTextStyle}>{props.data.main.temp}</div>
        </div>
        <div style={weatherDetGap}></div>

    </div>)
}