// import clouds from '../assets/clouds.png'
import clouds from "../../assets/clouds.png"
type HeaderProps={
    containerStyle:React.CSSProperties
    divStyle:React.CSSProperties
}

export const Header=(props:HeaderProps)=>{
  
    return(
    <div style={props.containerStyle}>
        <div>
          <img src={clouds}></img>
        </div>
        <div style={props.divStyle}>Weather Forecaster</div>
        
    </div>
    )

}