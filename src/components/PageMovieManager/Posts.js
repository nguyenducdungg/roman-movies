import React, { useState } from "react";
import { Button, Modal, Alert } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import axios from "../axios";
import { Loading } from "../Loading";
import "./index.css";

const Posts = ({ movies }) => {

    return (
        <div className="all-page-movie">
            {movies && <table className="content-table">
                <thead  >
                    <tr>
                        <th>Tên phim</th>
                        <th>Mô tả</th>
                        <th>Link phim</th>
                        <th>Diễn viên</th>
                        <th>Thể loại</th>
                        <th>Quốc gia</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody  >
                    {movies.map((movie) => {
                        return <tr

                            key={movie._id}>
                            <td >{movie.moviename}</td>
                            <td className="overflow-text">{movie.description}</td>
                            <td className="overlink" data-text={movie.movielink}>{movie.movielink}</td>
                            <td className="overflow-text">{movie.actors}</td>
                            <td >{movie.typemovie.map((e, index) => {
                                if (index > 0) { return `, ${e}` } else { return e }

                            })}</td>
                            <td
                            >{movie.national} </td>
                            <td> <Button className="m-1" variant="primary" as={Link} to={"/" + movie._id} >
                                Sửa
                            </Button>
                                <Delete id={movie._id} />
                            </td>
                        </tr >
                    })}
                </tbody>
            </table>}
        </div>
    )

}
export default Posts;



// xóa phim
function Delete(props) {

    const history = useHistory();
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        history.push("/")
    }
    const idMovieDelete = props.id;

    const [err, setErr] = useState(null);
    const [isSucceeded, setIsSucceeded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {
        setErr(null);
        setLoading(true);
        setIsSucceeded(false);
        try {
            await axios.delete('/deletemovie/' + idMovieDelete, {
                headers: {
                    'accept': 'application/json',
                    "token": `${user.token}`
                }
            });
            setIsSucceeded(true);

        } catch (err) {
            setErr("Xóa không thành công!")

        } finally {
            setLoading(false);
        }

    }

    return (
        <>
            <Button className="m-1" variant="danger" onClick={handleShow}>
                Xóa
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header >
                    <Modal.Title>Xóa phim</Modal.Title>
                </Modal.Header>
                {loading ? <Loading text="Đang xóa phim..."></Loading> : <>
                    {err && <Alert variant="danger">{err}</Alert>}
                    {isSucceeded && <Example />}
                    <Modal.Body>
                        Bạn có chắc chắn xóa phim này!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Đóng
                        </Button>
                        <Button variant="primary" onClick={handleDelete} >Đồng ý</Button>
                    </Modal.Footer>
                </>
                }
            </Modal>

        </>
    );
}

//Hiện thông báo xóa thành công
function Example() {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false)
        window.location.reload();
    };


    return (
        <>
            <Modal show={show} onHide={handleClose} style={{ backgroundColor: "#f1f2f3" }}>
                <Modal.Header >
                    <Modal.Title>Chúc mừng!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Xóa phim thành công </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} href="/">
                        OK!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

