import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import { containerStyle, divStyle } from "../Header/HeaderStyle";
import { Searchbar } from "../Searchbar/Searchbar";
import { searchbarStyles } from "../Searchbar/SearchbarStyle";
import { WeatherDisplay } from "../WeatherDisplay/WeatherDisplay";

export const Home = () => {
  const [list, setList] = useState<string[]>([]);
  const [data, setData] = useState<any[]>([]);

  const location = useLocation();
  const storedArray: any = localStorage.getItem("storedProp");
  const parsedArray = storedArray ? JSON.parse(storedArray) : [];
  
  useEffect(() => {
    setList(parsedArray);

    const fetchData = async () => {
      try {
        const promises = list.map( (e) => {
          // const url = `https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=a7dd691c01de4444f265fafac3dbf90f`;
          // const 
          const response = localStorage.getItem(e)
          const parsedresponse=response?JSON.parse(response):[]
          return parsedresponse;
        });

        const fetchedData = await Promise.all(promises);
        setData(fetchedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header containerStyle={containerStyle} divStyle={divStyle} />
      <Searchbar searchbarStyles={searchbarStyles} list={list} />
      {data.map((item, index) => (
        <WeatherDisplay key={index} data={item} />
      ))}
    </div>
  );
};
