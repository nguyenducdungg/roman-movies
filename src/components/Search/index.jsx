import React, { useState, useEffect } from 'react'
// import axios from '../utils/ApiAxios';
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

import axios from "../axios";


const Search = () => {
    const [values, setValues] = useState({
        search: '',
    });
    const [err, setErr] = useState(false)
    const [movieSearch, setMovieSearch] = useState([]);
    const handleChanges = (event) => {
        setErr(false)
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    };
    const handleSearch = async (event) => {

        event.preventDefault();
        if (values.search == '') {
            alert('Vui lòng nhập tên phim')
            return;
        }
        const response = await axios.get("/searchmovie", {
            params: {
                key: values.search,
            }
        });
        setMovieSearch(response.data?.movies)
    }

    return (
        <div className="background-search">
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Search</Form.Label>
                {err && <Alert variant="danger" style={{ textAlign: "center", alignItems: 'center', height: 10 }}>Vui lòng nhập tên phim ...</Alert>}
                <Form.Control type="text" placeholder=" Nhập tên phim ..." name="search" value={values.search} onChange={handleChanges} />
                <Button style={{ marginTop: 10 }} onClick={handleSearch}>Search</Button>
            </Form.Group>
            {movieSearch && (
                <div className="container-home">

                    <div className="main-home">
                        {movieSearch.map((movie) => {
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
            )}
        </div>
    )
}

export default Search