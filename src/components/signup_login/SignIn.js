import axios from "../axios";
import React, { useContext, useState } from "react";
import authCtx from "../Context/context";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Loading } from "../Loading";
import { Link, useHistory } from "react-router-dom";


export const SignIn = () => {
    const history = useHistory();
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const { setAuthUser } = useContext(authCtx)

    const handleChanges = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    };
    const [err, setErr] = useState("")
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErr(false);
        setLoading(true)
        if (!values.email || !values.password) {
            setErr("Email & Mật khẩu không được để trống!")
            return setLoading(false);
        }
        try {
            const res = await axios.post("/login", values);
            localStorage.setItem("user", JSON.stringify(res.data));
            setAuthUser(res.data);
            history.push('/')

        } catch (err) {
            setErr(err);
        } finally {
            setLoading(false);
        }
    }

    return (

        <Card>
            <Card.Header>Đăng nhập</Card.Header>
            <Card.Body>
                {loading ? <Loading text="Đang đăng nhập..." /> : <>
                    {err && <Alert variant="danger" style={{ textAlign: "center" }}>{err}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder=" Email ..." name="email" value={values.email} onChange={handleChanges} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Mật khẩu</Form.Label>
                            <Form.Control type="password" placeholder=" Mật khẩu ..." name="password" value={values.password} onChange={handleChanges} />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" type="submit" className="rounded-pill md-block">Đăng nhập</Button>
                        </div>
                    </Form>
                    <p className="mt-2 small text-center">Chưa có tài khoản? <Link to="/auth/sign-up">Đăng ký</Link> Ngay</p>
                </>}

            </Card.Body>
        </Card>



    )
}