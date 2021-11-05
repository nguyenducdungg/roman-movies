import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, } from "react-router-dom";
import axios from "../axios";
import { Loading } from "../Loading";


const SignUp = () => {

    const [values, setValues] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: "",
        phone: '',
        ruler: ''
    });

    const handleChanges = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    };

    const [err, setErr] = useState(null);
    const [isSucceeded, setIsSucceeded] = useState(false);
    const [loading, setLoading] = useState(false);
    const errEmail = "Email không được để trống!";
    const errPassword = "Mật khẩu không được để trống!";
    const errConfirmPassword = "Vui lòng nhập lại mật khẩu!";
    const errUsername = "Vui lòng nhập tên của bạn!";
    const errPhone = "Số điện thoại không đúng!";
    const errC = "Mật khẩu không khớp!";

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErr(null);
        setLoading(true);
        setIsSucceeded(false);
        if (!values.email) {
            setErr(errEmail);
            return setLoading(false);
        }
        if (!values.password) {
            setErr(errPassword);
            return setLoading(false);
        }
        if (!values.confirmPassword) {
            setErr(errConfirmPassword);
            return setLoading(false);
        }
        if (!values.username) {
            setErr(errUsername);
            return setLoading(false);
        }
        if (!values.phone) {
            setErr(errPhone);
            return setLoading(false);
        }
        if (values.confirmPassword !== values.password) {
            setErr(errC)
            return setLoading(false);
        }
        try {
            await axios.post("/register", values);
            setIsSucceeded(true);
        } catch (err) {
            console.log(err.response.data);
            setErr(err.response.data.error);
        } finally {
            setLoading(false);
        }


    };

    return (

        <Card >
            <Card.Header>Đăng ký</Card.Header>
            <Card.Body >
                {
                    loading ? <Loading text="Signing up..."></Loading> : <>
                        {err && <Alert variant="danger" style={{ textAlign: "center" }}>{err}</Alert>}
                        {isSucceeded && <Alert variant="success">Đăng ký thành công!</Alert>}
                        <Form onSubmit={handleSubmit} >

                            <Form.Group className="mb-1" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email..." name="email" onChange={handleChanges} value={values.email} />
                            </Form.Group>

                            <Form.Group className="mb-1" controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Nhập Username ... " name="username" onChange={handleChanges} value={values.username} />
                            </Form.Group>

                            <Form.Group className="mb-1" controlId="Password">
                                <Form.Label>Mật khẩu</Form.Label>
                                <Form.Control type="password" placeholder="Nhập password ..." name="password" onChange={handleChanges} value={values.password} />
                            </Form.Group>

                            <Form.Group className="mb-1" controlId="confirmPassword">
                                <Form.Label>Xác nhận mật khẩu</Form.Label>
                                <Form.Control type="password" placeholder="Nhập lại mật khẩu ..." name="confirmPassword" onChange={handleChanges} value={values.confirmPassword} />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="phone">
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control type="number" placeholder="Nhập số điện thoại của bạn ...   " name="phone" onChange={handleChanges} value={values.phone} />
                            </Form.Group>

                            <div className=" mt-3   d-grid gap-2">
                                <Button variant="primary" type="submit" className="rounded-pill md-block">Đăng ký</Button>
                            </div>
                            <p className="mt-2 small text-center"> Bạn đã có tài khoản? <Link to="/auth/sign-in">Đăng nhập</Link></p>
                        </Form></>
                }

            </Card.Body>
        </Card>


    )
}
export default SignUp