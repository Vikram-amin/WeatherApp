import React from 'react'
import styled from "styled-components";

function FavCity({ Favdata }) {
  return (
    <>
 
   {
   Favdata.map((data) => (
         <Container>
           <h4>City - {data.city}</h4>
           <h4>Temp - {data.Temp} F </h4>
           <h4>Humidity - {data.Humidity} %</h4>
           <h4>pressure - {data.pressure} pa</h4>
           <h4>Wind speed - {data.windSpeed} MPH</h4>
         </Container>
       
   ))
   }
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