import React, { useEffect, useState } from "react";
import { Display } from "./Display";
import "./styles.css";
import FavCity from "./FavCity"

export const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [Favdata, FavsetData] = React.useState([]);
  const [show, setShow] = useState(true)

  let API_KEY = "f0c9028e7c3e8f6e8a48994673470066";

  useEffect(() => {
    getData();
  }, [city]);

  const getData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFavData();
  }, []);

  const getFavData = () => {
    fetch(`http://localhost:8000/save`)
      .then((res) => res.json())
      .then((data) => FavsetData(data))
      .catch((err) => console.log(err));
  };




  return (
    <>
      <input
        className="searchBox"
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br />
      <button onClick={() => setShow(!show)}>Show Fav_city</button>
      {data.name !== undefined && <Display data={data} />}

      
      {show && <FavCity Favdata={Favdata} />}
    </>
  );
};

