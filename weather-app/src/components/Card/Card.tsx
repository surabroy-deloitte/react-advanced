import { useEffect, useState } from 'react';
import axios from 'axios';
import vector from '../../assets/Vector.png';
import weather from '../../assets/weather.png';
import { cardChildDivStyle, cardCityNameStyle, cardGap, cardTempStyle, cardVerticalStyle } from './CardStyle';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

type cardProps = {
  cardStyle: React.CSSProperties,
  cityName: string,
};

export const Card = (props: cardProps) => {
  const [data, setData] = useState<any>(null); // Define 'data' state variable
  const navigate = useNavigate();
  // const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cityname = props.cityName;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=cac57f137004c8210bc72d71220c418b`;
        const response = await axios.get(url);
        console.log(response.data);
        setData(response.data);
      
        // setList(props.list)
        console.log("List")
        // console.log(props.list)
        console.log(response.data); // Set the response data to 'data' state variable
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [props.cityName]);

  console.log(data);
  const weatherpng = data?.weather ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` : '';
  const handleClick = () => {
    // setShowWeatherDetails(true);
    console.log(data);
    // console.log(props.list);
    // navigate('/weatherDetails', { state: { resp: data, list: props.list } });
    // navigate('/weatherDetails', { state:data});
    navigate('/weatherDetails', { state: { data } });
    //  navigate('/weatherDetails', { state: { resp: data, list: props.list } });
  };

  return (
    <div style={props.cardStyle}>
      <div style={cardVerticalStyle}>
        <div style={cardCityNameStyle}>{props.cityName}</div>
        <div style={cardGap}></div>
        <div onClick={handleClick}>
          <img src={vector} alt="Vector" />
        </div>
      </div>
      <div style={cardVerticalStyle}>
        <div style={cardTempStyle}>{data?.main?.temp}</div>
        <div style={cardGap}></div>
        <div>
          <img src={weatherpng} alt="Weather Icon" />
        </div>
      </div>
      <div style={cardVerticalStyle}>
        <div style={cardChildDivStyle}>{data?.weather?.[0]?.main}</div>
        <div style={cardGap}></div>
        <div style={cardChildDivStyle}>{data?.weather?.[0]?.description}</div>
      </div>
    </div>
  );
};
