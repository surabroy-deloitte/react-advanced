import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";
import { containerStyle, divStyle } from "../Header/HeaderStyle";
import { WeatherDetailsVerticalStyle, addList1Style, addListStyle, backStyle, cityNameTextStyle, imgStyle, innerDiv, innerVerticalStyle, removeDiv, tempTextStyle, text1Style, textStyle, weatherDetGap } from "./WeatherDetailsStyle";
import back from '../../assets/arrow_back_ios_24px.png';
import union from '../../assets/Union.png';
import { TempCard } from "../TempCard/TempCard";
import { tempCardStyle } from "../TempCard/TempCardStyle";
import { useEffect, useState } from "react";

export const WeatherDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;

  const storedArray = localStorage.getItem("storedProp");
  const parsedArray = storedArray ? JSON.parse(storedArray) : [];
  const [newList, setNewList] = useState<string[]>(parsedArray);
  const [added, setAdded]=useState(false)
  useEffect(()=>{
    parsedArray.includes(data.name)
    setAdded(true)
  },[]);

  const handleClick = () => {
    console.log(newList);
    navigate('/', { state: { newList } });
  };

  const addToList = () => {
    const name = data.name;
    setAdded(true)
    if (!newList.includes(name)) {
      const updatedList = [...newList, name];
      setNewList(updatedList);
     
      localStorage.setItem("storedProp", JSON.stringify(updatedList));
      // localStorage.setItem("storedProp", JSON.stringify(updatedList));
      localStorage.setItem(data.name, JSON.stringify(data));
    }
  };

  if (!data) {
    return <div>Loading...</div>; // Or any other loading state
  }

  const weatherpng = data.weather ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` : '';

  const removeFromList=()=>{
    
    const list1=newList.filter((name) => name !== data.name);
    setNewList(list1);
    localStorage.setItem("storedProp", JSON.stringify(list1))
     
      
      setAdded(false)
  }

  return (
    <>
      <Header containerStyle={containerStyle} divStyle={divStyle} />
      <div style={WeatherDetailsVerticalStyle}>
        <div style={innerVerticalStyle}>
          <div style={innerDiv} onClick={handleClick}><img src={back} /></div>
          <div style={backStyle} onClick={handleClick}>Back</div>
        </div>

        <div style={weatherDetGap}></div>
        <div>
          <div><img src={weatherpng} style={imgStyle} /></div>
          <div style={cityNameTextStyle}>{data.name}</div>
          <div style={tempTextStyle}>{data.main.temp}</div>
        </div>
        <div style={weatherDetGap}></div>

      { !added && <div style={innerVerticalStyle}>
          <div style={addListStyle}>
            <div style={textStyle} onClick={addToList}>Add to list</div>
          </div>
          <div onClick={addToList}><img src={union} /></div>
        </div>
}
{ added && <div style={innerVerticalStyle}>
          <div style={addList1Style}>
            <div style={text1Style} >Added to list</div>
          </div>
          <div onClick={removeFromList} style={removeDiv}>Remove</div>
        </div>
}

      </div>
  
      <TempCard tempCardStyle={tempCardStyle} data={data} />
    </>
  );
};
