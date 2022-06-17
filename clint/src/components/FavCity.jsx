import React from 'react'
import styled from "styled-components";

function FavCity() {

    const [data, setData] = React.useState([])



  

  return (
    <>
      <button >Save</button>
      <Container>
        {/* <h4>City - {data.name}</h4>
        <h4>Temp - {data.main.temp} F </h4>
        <h4>Humidity - {data.main.humidity} %</h4>
        <h4>pressure - {data.main.pressure} pa</h4>
        <h4>Wind speed - {data.wind.speed.toFixed()} MPH</h4> */}
      </Container>
    </>
  );
}

export default FavCity

export const Container = styled.div`
  border: 2px solid orange;
  width: 40%;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  margin-left: 40px;
  line-height: 3px;
`;