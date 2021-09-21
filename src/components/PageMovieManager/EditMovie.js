import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Form, Container, Row, Col, Alert, Nav, Navbar } from "react-bootstrap";
import { useParams, Link } from 'react-router-dom';
import axios from "../axios";
import GenreSelect from "./genreSelect";
import NationalSelect from "./nationalSelect";
import { Loading } from "../Loading";

const EditMovie = () => {

    const [err, setErr] = useState(null);
    const [isSucceeded, setIsSucceeded] = useState(false);
    const [loading, setLoading] = useState(false);

    const params = useParams();
    const id = params.id;


    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get("/getmovie/" + id);
            const data = await response.data;
            setValues(data);
            console.log(data);
        };
        fetchMovie();
    }, [id]);


    const [values, setValues] = useState({
        moviename: '',
        trailerlink: '',
        movielink: '',
        imagelink: '',
        image: '',
        typemovie: [],
        national: '',
        actors: '',
        description: ''
    });


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

    const handleChanges = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    };
    const errMovieName = "Tên phim không được để trống!";
    const errMovieLink = "Link phim không được để trống!";


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
        formData.append("imagelink", values.imagelink);
        if (!values.moviename) {
            setErr(errMovieName)
            return setLoading(false);
        }
        if (!values.movielink) {
            setErr(errMovieLink)
            return setLoading(false);
        }

        try {

            await axios.put("/updatemovie/" + id, formData, {
                headers: {
                    'Accpet': 'application//json',
                    "Content-Type": "multipart/form-data",
                }
            });
            setIsSucceeded(true)
        } catch (err) {

            setErr(err.response.data);
        } finally {
            setLoading(false)
        }

    };

    return (
        <div className=" all  d-flex flex-column" onSubmit={handleSubmit}>
            <Container className="  mt-3 d-flex justify-content-between" >
                <Navbar.Brand as={Link} to="/"><img src="/logo-full.png" alt="" style={{ height: 40 }} /></Navbar.Brand>
                <Nav >
                    <Link as={Link} to="/page-movie-manager">admin  </Link>
                </Nav>
            </Container>
            {loading ? <Loading text="Đang thay đổi....."></Loading> : <>
                {err && <Alert variant="danger" style={{ textAlign: "center" }}>{err}</Alert>}
                {isSucceeded && <Edit />}
                <Row className="pb-5">
                    <Col xs={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }} xl={{ span: 6, offset: 3 }}>
                        <Card>
                            <Card.Header><h3>Sửa phim   </h3></Card.Header>
                            <Card.Body >
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
                                    <Container> <img className="mb-2    " style={{ width: 80, height: 100 }} src={"http://apiwebmovie.herokuapp.com/" + values.imagelink} alt="" />   </Container>

                                    <div>
                                        <input type="file" className="border mb-3" onChange={fileInputOnChange} />
                                    </div>
                                    <Container className="mb-3">
                                        <Row>
                                            <Col>
                                                <GenreSelect isMulti={true} value={values.typemovie} label={"Thể loại:  " + values.typemovie} onChange={inputTypemovieOnchange} name="typemovie" />
                                            </Col>
                                            <Col><Form.Group className="mb-3" controlId="national">

                                                <div>Quốc gia</div>
                                                <select name="national" value={values.national} onChange={handleChanges} >
                                                    <NationalSelect />
                                                </select>

                                            </Form.Group></Col>
                                        </Row>
                                    </Container>
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

                            </Card.Body>

                        </Card>
                    </Col>
                </Row></>}

        </div >


    )
}




// Hiện thông báo thay đổi thành công
function Edit() {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        window.location.reload();
    }


    return (
        <>
            <Modal className="all" show={show} onHide={handleClose}  >
                <Modal.Header >
                    <Modal.Title>Chúc mừng!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Thay đổi Hoàn tất!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} href="/page-movie-manager">
                        OK!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditMovie;


