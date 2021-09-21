import React, { useState, useEffect } from "react";
import axios from "../axios";

const NationalSelect = () => {
    const [countrys, SetCountry] = useState([]);
    const fectCountry = async () => {
        const response = await axios.get("/getnationalmovie");
        const data = await response.data;
        SetCountry(data);

    };
    useEffect(() => {
        fectCountry();
    }, []);
    const countrysOption = countrys.map((country, index) => {
        return <option key={index} value={country}>{country}</option>;
    });
    return (
        <> <option value="">- Quốc gia -</option>
            {countrysOption}
        </>
    );
};

export default NationalSelect;
