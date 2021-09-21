import "./slider.css"

import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Card from "../card/Card";
import axios from "../axios/axios";


export default function Slider() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get("/getallmovie");
            const data = await response.data;
            setMovies(data);

        };
        fetchMovie();
    }, []);

    console.log(movies)
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }

    ];

    return (
        <div className="slider">
            <span className="sliderTitle">Phim lẻ</span>
            <Carousel breakPoints={breakPoints}>
                {movies.map((movie, index) => {
                    return <Card key={index} value={movie} />
                })}
            </Carousel>
        </div>
    )
}
