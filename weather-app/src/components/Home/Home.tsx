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
        const promises = list.map(async (e) => {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=25fcdb8dbedf6b654ad3d33ccf0a55f9`;
          const response = await axios.get(url);
          return response.data;
        });

        const fetchedData = await Promise.all(promises);
        setData(fetchedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [list, parsedArray]);

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
