import { cityNameTextStyle, imgStyle, tempTextStyle, weatherDetGap } from "../WeatherDetails/WeatherDetailsStyle"
import weatherpng from '../../assets/weather.png'
import axios from "axios"
import { TempCard } from "../TempCard/TempCard"
import { cityNameText1Style,  tempCard1Style,  tempText1Style } from "../Home/HomeStyle"
import { tempCardChildDiv1Style, tempCardChildDiv2Style, tempCardDivStyle } from "../TempCard/TempCardStyle"
// import { tempCardStyle } from "../TempCard/TempCardStyle"


type WeatherDisplayProps={
    data:any
}
export const WeatherDisplay=(props:WeatherDisplayProps)=>{
        
    return(<div>
        <div style={weatherDetGap}></div>

        <div>
          <div><img src={weatherpng} style={imgStyle} /></div>
          <div style={cityNameText1Style}>{props.data.name}</div>
          <div style={tempText1Style}>{props.data.main.temp}</div>
        </div>
        <div style={weatherDetGap}></div>

        {/* <TempCard tempCardStyle={tempCard1Style} data={props.data} /> */}
        <div style={tempCard1Style}> 

<div style={tempCardDivStyle}>
    <div style={tempCardChildDiv1Style}>TIME</div>
    <div style={tempCardChildDiv2Style}>{props.data.timezone}</div>
</div>

<div style={tempCardDivStyle}>
    <div style={tempCardChildDiv1Style}>PRESSURE</div>
    <div style={tempCardChildDiv2Style}>{props.data.main.pressure}</div>
</div>

<div style={tempCardDivStyle}>
    <div style={tempCardChildDiv1Style}>%RAIN</div>
    <div style={tempCardChildDiv2Style}>{props.data.main.humidity}%</div>
</div>

<div style={tempCardDivStyle}>
    <div style={tempCardChildDiv1Style}>HUMIDITY</div>
    <div style={tempCardChildDiv2Style}>{props.data.main.humidity}</div>
</div>

    </div>
    </div>)
}