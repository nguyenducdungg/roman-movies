import React, { useState } from "react";
import { Link } from "react-router-dom"
// import axios from "../utils/ApiAxios";
import FilterMovie from '../Sort/FilterMovie'
const AllMovies = () => {
    const [movies, setMovies] = useState(null);

    // useEffect(() => {
    //     const fetchMovie = async () => {
    //         const response = await axios.get("/getallmovie");
    //         const data = await response.data;
    //         setMovies(data);

    //     };
    //     fetchMovie();
    // }, []);
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
    let indexSizeMovie = [];
    if (movies) { indexSizeMovie = movies.movies.slice(0, 10); }
    // console.log(movies);
    return (
        <><br />
            <FilterMovie setMovies={setMovies} />
            <br />
            {movies ? (
                <div className="container-home">

                    <div className="main-home">
                        {indexSizeMovie.map((movie) => {
                            return (
                                <Link to={"/info/" + movie.moviename + "/" + movie._id} key={movie._id} >
                                    <div className="scale-movie">
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