
import React from "react";
import styled from "styled-components";

export const Display = ({ data }) => {
    const [datafav, setDatafav] = React.useState([]);

const saveData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      city: data.name,
      Temp: data.main.temp,
      Humidity: data.main.humidity,
      pressure: data.main.pressure,
      windSpeed: data.wind.speed.toFixed(),
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8000/save", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("error", error));
}


  


  

  return (
    <Container>
      <h4>City - {data.name}</h4>
      <h4>Temp - {data.main.temp} F </h4>
      <h4>Humidity - {data.main.humidity} %</h4>
      <h4>pressure - {data.main.pressure} pa</h4>
      <h4>Wind speed - {data.wind.speed.toFixed()} MPH</h4>
      <button onClick={()=> saveData()}>Save</button>
    </Container>
  );
};

export const Container = styled.div`
  border: 2px solid orange;
  width: 40%;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  margin-left: 40px;
  line-height: 3px;
`;