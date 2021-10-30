import React, { useEffect, useState } from "react";
import GenreFilterSelect from "./GenreFilterSelect";
import axios from '../axios'
import CountrySelect from "./CountrySelect";
import { Form } from "react-bootstrap";
import "./Filtermovie.css";


//Cách dùng: Sau thi thêm component FilterMovie vào thẻ, thì truyền 2 yếu tố là movies, setMovies của  trang  chính vào để set sự thay đổi

const FilterMovie = () => {

    const [movies, setAllMovie] = useState([])
    const [values, setValues] = useState({
        typemovie: '',
        national: '',
        year: '',
    });
    useEffect(() => {

        const FilterMovies = async () => {
            const response = await axios.get("/filter", {
                params: {
                    typemovie: values.typemovie,
                    national: values.national,
                    year: values.year
                }
            });
            const data = await response.data;
            console.log(data)
            setAllMovie(data)
        }
        FilterMovies();

    }, [values])

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
            </div>   <div className="select-field">
                <label>Năm</label>
                <div className="select">

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="number" placeholder="Năm" name='year' value={values.year} onChange={handleChanges} />
                    </Form.Group>
                </div>
            </div>
        </div>
    );
}

export default FilterMovie;
