
import groupclouds from '../../assets/GroupClouds.png'
type DefaultProps={
    defaultStyle:React.CSSProperties
    defaultTextStyle:React.CSSProperties
}
export const Default=(props:DefaultProps)=>{
    
    return(
        <div style={props.defaultStyle}>
         <div><img src={groupclouds}></img></div>   
         <div style={props.defaultTextStyle}>No locations added to watchlist</div>
        </div>
    )
}