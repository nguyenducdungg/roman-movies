import "./Movie.css"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "../axios/axios";
import FilterMovie from '../Sort/FilterMovie'

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
    const indexSizeMovie = movies.slice(0, 10);
    return (
        <>
            {movies ? (
                <div className="container-home">
                    <FilterMovie />
                    <h2 className="title-home">
                        <span className="title-home-type">Phim lẻ</span>
                        <Link to="/type/movie"><span className="title-home-watchAll">Xem tất cả <i className="fas fa-caret-right"></i></span></Link>
                    </h2>
                    <div className="main-home">
                        {indexSizeMovie.map((movie) => {
                            return (
                                <Link to={"/info/" + movie.moviename + "/" + movie._id} key={movie._id} >
                                    <div>

                                        <img className="img-home" src={movie.imagelink} alt="movies" />

                                        <div className="main-home-title-movie">
                                            <h3 className="movieName" >{movie.moviename}</h3>
                                            <h3 className="movieNameVn">{movie.movienamevn}</h3>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            ) : (
                <>
                    <div className="loading">Loading</div>
                </>
            )}
        </>
    )
}
