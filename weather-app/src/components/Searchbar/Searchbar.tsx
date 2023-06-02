import { Key, useEffect, useState } from "react";
import { Default } from "../Default/Default";
import { defaultStyle, defaultTextStyle } from "../Default/DefaultStyle";
import { Datalist } from "../Datalist/Datalist";
import { datalistStyle, verticalStyle } from "../Datalist/DatalistStyle";
import { Card } from "../Card/Card";
import { cardStyle } from "../Card/CardStyle";
import { WeatherDetails } from "../WeatherDetails/WeatherDetails";
import { HomeStyle } from "../Home/HomeStyle";
import { WeatherDisplay } from "../WeatherDisplay/WeatherDisplay";

type SearchbarProps={
  searchbarStyles:React.CSSProperties
  list:any
  data:any
}
export const Searchbar=(props:SearchbarProps)=>{
    const [inputValue, setInputValue] = useState('');
    const [showPicture, setShowPicture] = useState(true);
    const [showCard, setShowCard]=useState(false);
    const [suggestedValue, setSuggestedValue]=useState('');
    const suggestions = ['Bangalore', 'Mumbai'];
    useEffect(() => {
      console.log("hi");
      // console.log(props.list);
     
      
  }, []);
    const handleFocus = () => {
      // localStorage.setItem('toggle','hey')
      setShowPicture(false);
      // if(!showPicture)
      localStorage.setItem('toggle','true')
      // else if(showPicture)
      // localStorage.setItem('toggle','false')
    };
  
    const handleBlur = () => {
      setShowPicture(true);
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
      };

      const handleClick = (suggestion: string) => {
        setInputValue(suggestion);
        setSuggestedValue(suggestion);
        setShowCard(true);

      };
    
  const filteredSuggestions = suggestions.filter((suggestion) =>
  suggestion.toLowerCase().includes(inputValue.toLowerCase())
);
    return (
        <div className="search-container">
            <input type="text" onFocus={handleFocus}  value={inputValue}
             onChange={handleInputChange} placeholder="Search Location" style={props.searchbarStyles} />
            
            {!showPicture && (<>
                <div style={verticalStyle}>

                    {filteredSuggestions.map((suggestion) => (
                        <Datalist datalistStyle={datalistStyle} suggestion={suggestion} onClick={()=>handleClick(suggestion)}></Datalist>
                         
                    ))}
                    

                </div>
               {showCard && <Card cardStyle={cardStyle} cityName={suggestedValue}/>}
               </>
            )}

            {showPicture && props.list.length===0 && <Default defaultStyle={defaultStyle} defaultTextStyle={defaultTextStyle} />}
            {localStorage.getItem('toggle')!=='true' && 
            <>
            {
            props.data.map((item: any, index: Key | null | undefined) => (
              <div style={HomeStyle}><WeatherDisplay key={index} data={item} /></div>
            ))}
            </>}
        </div>
    );
}