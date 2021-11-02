import React, { useState, useEffect } from "react";
import axios from "../axios";

const CountrySelect = () => {
  const [countrys, SetCountry] = useState([]);

  useEffect(async () => {
    const response = await axios.get("/getnationalmovie");
    const data = await response.data;
    return () => {
      SetCountry(data);
    };
  }, []);
  const countrysOption = countrys.map((country, index) => {
    return (
      <option key={index} value={country}>
        {country}
      </option>
    );
  });
  return (
    <>
      {" "}
      <option value="">- Quốc gia -</option>
      {countrysOption}
    </>
  );
};

export default CountrySelect;
