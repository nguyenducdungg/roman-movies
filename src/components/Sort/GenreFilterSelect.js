import React, { useState, useEffect } from "react";
import axios from "../axios";

const GenreFilterSelect = () => {
  const [genres, SetGenre] = useState([]);

  useEffect(async () => {
    const response = await axios.get("/gettypemovie");
    const data = await response.data;
    return () => {
      SetGenre(data);
    };
  });
  let genresOption = [];
  if (genres > 0) {
    genresOption = genres.map((genre, index) => {
      return (
        <option key={index} value={genre}>
          {genre}
        </option>
      );
    });
  }
  return (
    <>
      {genresOption && (
        <>
          <option value="">- Thể loại -</option>
          {genresOption}
        </>
      )}
    </>
  );
};

export default GenreFilterSelect;
