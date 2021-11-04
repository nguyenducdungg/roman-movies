import React, { useState } from "react";
import { Link } from "react-router-dom"
// import axios from "../utils/ApiAxios";
import FilterMovie from '../Sort/FilterMovie';
import ReactPaginate from "react-paginate";
const AllMovies = () => {
    var [movies, setMovies] = useState(null);

    const [pageNumber, setPageNumber] = useState(0);
    const moviePerPage = 10;
    const pageVisted = pageNumber * moviePerPage


    if (movies) {
        var displayMovie = movies.movies
            .slice(pageVisted, pageVisted + moviePerPage)
            .map(movie => {
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
            });
        var pageCount = Math.ceil(movies.totalMovie / moviePerPage)
        var changePage = ({ selected }) => {
            setPageNumber(selected)
        }
    }

    // let indexSizeMovie = [];
    // if (movies) { indexSizeMovie = movies.movies.slice(0, 10); }
    // console.log(movies);
    return (
        <>
            <br />
            <FilterMovie setMovies={setMovies} />
            <br />
            {movies ? (
                <div className="container-home">

                    <div className="main-home">
                        {displayMovie}
                    </div>
                    <br />
                    <br />
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBtn"}
                        previousLinkClassName={"previousBtn"}
                        nextLinkClassName={"nextBtn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
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