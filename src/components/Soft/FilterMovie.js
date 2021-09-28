import React, { useEffect, useState } from "react";
import GenreFilterSelect from "./GenreFilterSelect";

import CountrySelect from "./CountrySelect";
import "./Filtermovie.css";


//Cách dùng: Sau thi thêm component FilterMovie vào thẻ, thì truyền 2 yếu tố là movies, setMovies của  trang  chính vào để set sự thay đổi

function FilterMovie() {

    [movies, setMovies] = useState([])
    const [values, setValues] = useState({
        typemovie: '',
        national: '',
    });

    useEffect(() => {
        if (values.typemovie && !values.national) {
            const fetchMovieByTypemoive = async () => {
                const response = await axios.get("/filter?typemovie=" + values.typemovie);
                const data = await response.data;
                data.reverse();
                setAllMovie(data)
            };
            fetchMovieByTypemoive();
        }

        if (!values.typemovie && values.national) {
            const fetchMovieByNational = async () => {
                const response = await axios.get("/filter?national=" + values.national);
                const data = await response.data;
                data.reverse();
                setAllMovie(data);

            };
            fetchMovieByNational();
        }
        if (values.typemovie && values.national) {
            const fetchMovieByTypeAndNational = async () => {
                const response = await axios.get(`/filter?typemovie=${values.typemovie}national=${values.national}`);
                const data = await response.data;
                data.reverse();
                setAllMovie(data);

            };
            fetchMovieByTypeAndNational();
        }
    }, [values.typemovie, values.national])

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
