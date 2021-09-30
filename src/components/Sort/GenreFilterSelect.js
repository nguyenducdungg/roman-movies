import React, { useState, useEffect } from "react";
import axios from "../axios";

const GenreFilterSelect = () => {
    const [genres, SetGenre] = useState([]);
    const fectCountry = async () => {
        const response = await axios.get("/gettypemovie");
        const data = await response.data;
        SetGenre(data);

    };
    useEffect(() => {
        fectCountry();
    }, []);
    const genresOption = genres.map((genre, index) => {
        return <option key={index} value={genre}>{genre}</option>;
    });
    return (
        <> <option value="">- Thể loại -</option>
            {genresOption}
        </>
    );
};

export default GenreFilterSelect;
