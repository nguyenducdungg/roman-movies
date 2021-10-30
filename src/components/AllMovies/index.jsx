import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "../utils/ApiAxios";
import FilterMovie from '../Sort/FilterMovie'
const AllMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get("/getallmovie");
            const data = await response.data;
            setMovies(data);

        };
        fetchMovie();
    }, []);
    // const [allMovie, setAllMovie] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const moviesPerPage = 5
    // useEffect(() => {
    //     const fetchAllMovie = async () => {
    //         const response = await axios.get("/getallmovie");
    //         const data = await response.data;
    //         data.reverse();
    //         setAllMovie(data);

    //     };
    //     fetchAllMovie();
    // }, [setAllMovie]);

    // const indexOFLastMovie = currentPage * moviesPerPage;
    // const indexOfFirstMovie = indexOFLastMovie - moviesPerPage;
    // const currentPosts = allMovie.slice(indexOfFirstMovie, indexOFLastMovie);
    // //change page
    // const paginate = (pageNumber) => {
    //     setCurrentPage(pageNumber)
    // }
    const indexSizeMovie = movies.slice(0, 10);
    return (
        <>
            {movies ? (
                <div className="container-home">
                    <br />
                    <FilterMovie/>
                    <br />
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

export default AllMovies;