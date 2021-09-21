
import React, { useState, useEffect } from "react";
import { Container, Modal, Button, Form, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css"
import axios from "../axios";
import GenreSelect from "./genreSelect.js";
import NationalSelect from "./nationalSelect.js";
import Posts from "./Posts";
import Pagination from "./Pasination";
import { Loading } from "../Loading";


const PageMovieManager = () => {

    const [modalShow, setModalShow] = useState(false);
    const [allMovie, setAllMovie] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 5
    useEffect(() => {
        const fetchAllMovie = async () => {
            const response = await axios.get("/getallmovie");
            const data = await response.data;
            data.reverse();
            setAllMovie(data);

        };
        fetchAllMovie();
    }, []);

    const indexOFLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOFLastMovie - moviesPerPage;
    const currentPosts = allMovie.slice(indexOfFirstMovie, indexOFLastMovie);
    //change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    return (
        <div className=" all" >
            < Container >
                <div className="pt-3">
                    <div className="d-flex flex-row" style={{ height: 40 }}>
                        <Link to="/">
                            <img src="/logo-full.png" alt="" style={{ height: 40 }} />
                        </Link>
                        <>
                            <Button variant="primary" className="ms-auto" onClick={() => setModalShow(true)}>
                                Tải lên phim mới
                            </Button>

                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </>
                    </div>
                    <h1 className="text-center pt-2" style={{ fontSize: 50 }}>Danh Sách Phim</h1>

                    <Posts movies={currentPosts} />
                    <Pagination moviesPerPage={moviesPerPage} totalMovies={allMovie.length} paginate={paginate} />
                </div>
            </Container >
        </div >
    )
}

export default PageMovieManager;



// Modal Thêm phim mới
function MyVerticallyCenteredModal(props) {

    const [err, setErr] = useState(null);
    const [isSucceeded, setIsSucceeded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        moviename: '',
        trailerlink: '',
        movielink: '',
        imagelink: '',
        image: '',
        typemovie: '',
        national: '',
        actors: '',
        description: ''
    });
    const handleChanges = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    };

    const errMovieName = "Tên phim không được để trống!";
    const errMovieLink = "Link phim không được để trống!";
    const errImage = "Vui lòng chọn ảnh Phim";

    const handleSubmit = async (event) => {
        console.log(values)
        event.preventDefault();
        setErr(null);
        setLoading(true);
        setIsSucceeded(false);
        const formData = new FormData();
        formData.append("moviename", values.moviename);
        formData.append("trailerlink", values.trailerlink);
        formData.append("movielink", values.movielink);
        formData.append("description", values.description);
        formData.append("national", values.national);
        formData.append("actors", values.actors);
        formData.append("typemovie", values.typemovie);
        formData.append("image", values.image);
        formData.append("imagelink", values.imagelink);
        if (!values.moviename) {
            setErr(errMovieName)
            return setLoading(false);
        }
        if (!values.movielink) {
            setErr(errMovieLink)
            return setLoading(false);
        }
        if (!values.image) {
            setErr(errImage)
            return setLoading(false);
        }
        try {
            await axios.post("/createmovie", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            setIsSucceeded(true);

        } catch (err) {

            setErr(err.response.data);
        } finally {
            setLoading(false)
        }

    };
    const fileInputOnChange = (event) => {
        setValues({
            ...values,
            image: event.target.files[0]
        })
    }
    const inputTypemovieOnchange = (event) => {
        setValues({
            ...values,
            typemovie: (Array.isArray(event) ? event.map(x => x.label) : [])
        })

    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onSubmit={handleSubmit}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Thêm phim mới
                </Modal.Title>
                <Button onClick={props.onHide}><span>Đóng </span></Button>
            </Modal.Header>

            {loading ? <Loading text="Tạo phim mới..."></Loading> : <>
                {err && <Alert variant="danger" style={{ textAlign: "center" }}>{err}</Alert>}
                {isSucceeded && <Example />}
                <Modal.Body>
                    <Form >
                        <Form.Group className="mb-3" controlId="moviename">
                            <Form.Control type="text" placeholder="Tên phim" name="moviename" value={values.moviename} onChange={handleChanges} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="trailerlink">
                            <Form.Control type="text" placeholder="Link trailer" name="trailerlink" value={values.trailerlink} onChange={handleChanges} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="movielink">
                            <Form.Control type="text" placeholder="Link phim" name="movielink" value={values.movielink} onChange={handleChanges} />
                        </Form.Group>
                        <div>
                            <input type="file" className="border mb-3" onChange={fileInputOnChange} />
                        </div>
                        <Container className="mb-3">
                            <Row>
                                <Col>
                                    <GenreSelect isMulti={true} label="Thể loại" value={values.typemovie} onChange={inputTypemovieOnchange} name="typemovie" />
                                </Col>
                                <Col><Form.Group className="" controlId="national">
                                    <div>Quốc gia</div>
                                    <select name="national" value={values.national} onChange={handleChanges} >
                                        <NationalSelect />
                                    </select>

                                </Form.Group></Col>
                            </Row>
                        </Container>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Diễn viên" name="actors" value={values.actors} onChange={handleChanges} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control type="text" placeholder="mô tả" name="description" value={values.description} onChange={handleChanges} as="textarea" rows={3} />
                        </Form.Group>
                        <div className="w-100 d-flex justify-content-center">
                            <Button variant="primary" type="submit" className="rounded-pill" style={{ width: 100 }}>Lưu</Button>
                        </div>
                    </Form>
                </Modal.Body></>}



        </Modal>
    );
}


// Hiện thông báo thêm phim thành công
function Example() {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false)
        window.location.reload();
    };


    return (
        <>
            <Modal show={show} onHide={handleClose} style={{ backgroundColor: "#ffffff" }}>
                <Modal.Header >
                    <Modal.Title>Chúc mừng!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Thêm phim mới thành công!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} href="/page-movie-manager">
                        OK!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

