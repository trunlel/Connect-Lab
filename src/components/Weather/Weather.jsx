import React, { useState } from "react";
import axios from "axios";

export const Weather = () => {
  const url = "http://api.weatherapi.com/v1.current.json";




  return (
    <>
      <h3>Clima na suas Coordernadas(exemplo)</h3>
      <hr />
      <ul>
        <li>Temp</li>
        <li>Temp</li>
        <li>Temp</li>
        <li>Temp</li>
        <li>Temp</li>
      </ul>
    </>
  );
};
