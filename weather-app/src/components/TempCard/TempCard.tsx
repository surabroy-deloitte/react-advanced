import { tempCardChildDiv1Style, tempCardChildDiv2Style, tempCardDivStyle, tempCardStyle } from "./TempCardStyle"

type tempCardProps={
  tempCardStyle:React.CSSProperties
  data:any
}
export const TempCard=(props:tempCardProps)=>{
return(
<div style={tempCardStyle}>
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
)
}