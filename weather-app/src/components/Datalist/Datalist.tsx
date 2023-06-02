type datalistProps={
    datalistStyle:React.CSSProperties
    suggestion:string
    onClick:()=>void
}
export const Datalist=(props:datalistProps)=>{
    return(
        <div style={props.datalistStyle} onClick={props.onClick}>{props.suggestion}</div>
    )
}