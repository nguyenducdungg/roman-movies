import React, { useState } from "react";
import GenreFilterSelect from "./GenreFilterSelect";

import CountrySelect from "./CountrySelect";
import "./Filtermovie.css";

function FilterMovie() {


    const [values, setValues] = useState({
        typemovie: '',
        national: '',
    });

    const handleChanges = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    };
    return (
        <div className="filter-wrapper">
            <div className="select-field">
                <label>Thể loại:</label>
                <div className="select">
                    <select name="typemovie" value={values.typemovie} onChange={handleChanges}>
                        <GenreFilterSelect />
                    </select>
                </div>
            </div>
            <div className="select-field">
                <label>Quốc gia:</label>
                <div className="select">
                    <select name="national" value={values.national} onChange={handleChanges}>
                        <CountrySelect />
                    </select>
                </div>
            </div>
        </div>
    );
}

export default FilterMovie;
