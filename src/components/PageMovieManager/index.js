
import React, { useState, useEffect } from "react";
import { Container, Modal, Button, Form, Row, Col, Alert } from "react-bootstrap";
import "./index.css"
import axios from "../axios";
import GenreSelect from "./genreSelect.js";
import NationalSelect from "./nationalSelect.js";
import Posts from "./Posts";
import Pagination from "./Pasination";
import { Link, useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Loading } from "../Loading";



const PageMovieManager = () => {
    const history = useHistory();

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
    }, [setAllMovie]);

    const indexOFLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOFLastMovie - moviesPerPage;
    const currentPosts = allMovie.slice(indexOfFirstMovie, indexOFLastMovie);
    //change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    return (
        <div className="all-page-movie" >
            < Container >
                <div className="pt-3">
                    <div className="d-flex flex-row " style={{ justifyContent: "space-between" }}>
                        <>
                            <Button variant="primary" as={Link} to="/userlist" >
                                Quản lí người dùng
                            </Button>

                            <div>
                                <Button variant="primary" onClick={() => setModalShow(true)}>
                                    Tải lên phim mới
                                </Button>
                                <Button style={{
                                    marginLeft: 10
                                }} variant="danger" onClick={() => {
                                    if (window.confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
                                        localStorage.removeItem('user')
                                        history.push("/");
                                        window.location.reload();
                                    }
                                }}>
                                    Đăng Xuất
                                </Button>
                            </div>



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

    const token = JSON.parse(localStorage.getItem("user")).token;
    console.log(token)
    const [err, setErr] = useState(null);
    const [isSucceeded, setIsSucceeded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        moviename: '',
        movienamevn: '',
        trailerlink: '',
        movielink: '',
        imagelink: '',
        image: undefined,
        imagebackground: undefined,
        timeduration: '',
        typemovie: '',
        national: '',
        actors: '',
        description: '',
        year: '',
        director: '',
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
    const errImagebackground = "Vui lòng chọn ảnh bìa Phim";

    const handleSubmit = async (event) => {

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
        formData.append("imagebackground", values.imagebackground);
        formData.append("timeduration", values.timeduration);
        formData.append("year", values.year);
        formData.append("movienamevn", values.movienamevn);
        formData.append("imagelink", values.imagelink);
        formData.append("director", values.director);
        console.log(formData)
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
        if (!values.imagebackground) {
            setErr(errImagebackground)
            return setLoading(false);
        }
        try {
            await axios.post("/createmovie", formData, {
                headers: {
                    "accept": "application/json",
                    "Content-Type": "multipart/form-data",
                    "token": `${token}`
                }
            });
            setIsSucceeded(true);

        } catch (err) {
            setErr("Tải phim lên không thành công!");
        } finally {
            setLoading(false)
        }

    };
    const fileInputOnChangeImage = (event) => {
        setValues({
            ...values,
            image: event.target.files[0]
        })
    }
    const fileInputOnChangeImagebackground
        = (event) => {
            setValues({
                ...values,
                imagebackground: event.target.files[0]
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
                        <Form.Group className="mb-3" controlId="movienamevn">
                            <Form.Control type="text" placeholder="Tên phim dạng Tiếng Việt" name="movienamevn" value={values.movienamevn} onChange={handleChanges} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="trailerlink">
                            <Form.Control type="text" placeholder="Link trailer" name="trailerlink" value={values.trailerlink} onChange={handleChanges} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="movielink">
                            <Form.Control type="text" placeholder="Link phim" name="movielink" value={values.movielink} onChange={handleChanges} />
                        </Form.Group>
                        <Container>
                            <Row>
                                <Col>
                                    <div>
                                        <div>Ảnh phim</div>
                                        <input type="file" className="border mb-3" onChange={fileInputOnChangeImage} />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <div>Ảnh bìa phim</div>
                                        <input type="file" className="border mb-3" onChange={fileInputOnChangeImagebackground} />
                                    </div>
                                </Col>

                            </Row>
                        </Container>

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
                        <Form.Group className="mb-3" controlId="director">
                            <Form.Control type="text" placeholder="Đạo diễn" name="director" value={values.director} onChange={handleChanges} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="year">
                            <Form.Control type="text" placeholder="Năm sản xuất" name="year" value={values.year} onChange={handleChanges} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="timeduration">
                            <Form.Control type="text" placeholder="Thời lượng phim" name="timeduration" value={values.timeduration} onChange={handleChanges} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="actors">
                            <Form.Control type="text" placeholder="Diễn viên" name="actors" value={values.actors} onChange={handleChanges} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
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
                    <Button variant="primary" onClick={handleClose} href="/">
                        OK!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

