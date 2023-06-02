import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import { containerStyle, divStyle } from "../Header/HeaderStyle";
import { Searchbar } from "../Searchbar/Searchbar";
import { searchbarStyles } from "../Searchbar/SearchbarStyle";
import { WeatherDisplay } from "../WeatherDisplay/WeatherDisplay";
import { HomeStyle } from "./HomeStyle";

export const Home = () => {
  const [list, setList] = useState<string[]>([]);
  const [data, setData] = useState<any[]>([]);

  const location = useLocation();
  const storedArray: any = localStorage.getItem("storedProp");
  const parsedArray = storedArray ? JSON.parse(storedArray) : [];

  useEffect(() => {
    setList(parsedArray);
  }, []);

  useEffect(() => {
    var fetchedData:any=[]
    const fetchData =  () => {
      try {
        list.map((e) => {
          const response = localStorage.getItem(e);
          const resp=response?JSON.parse(response):[]
          fetchedData=[...fetchedData,resp]
          console.log(response);
        });

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    setData(fetchedData)
    console.log(data)
  }, [list]);

  return (
    <div className="App">
      <Header containerStyle={containerStyle} divStyle={divStyle} />
      <Searchbar searchbarStyles={searchbarStyles} list={list} />
      {data.map((item, index) => (

        <div style={HomeStyle}><WeatherDisplay key={index} data={item} /></div>
      ))}
    </div>
  );
};
