import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Route, Link, useHistory } from "react-router-dom";
import { SignUp } from '../components/signup_login/SignUp';
import { SignIn } from '../components/signup_login/SignIn';
import authCtx from "../components/Context/context";


export const HomeAuth = () => {
    const { authUser } = useContext(authCtx);
    const history = useHistory();

    useEffect(() => {
        if (authUser) {
            history.push("/");
        }
    }, [authUser, history])

    return (
        <div >
            <Container >
                <div className="h-100 pt-3">
                    <div className="text-center mb-3">
                        <Link to="/">
                            <img src="/logo-full.png" alt="" style={{ height: 40 }} />
                        </Link>
                    </div>
                    <div>
                        <Row>
                            <Col xs={12} lg={{ span: 6, offset: 3 }} xl={{ span: 4, offset: 4 }}>
                                <Route path="/auth/sign-up" component={SignUp} />
                                <Route path="/auth/sign-in" component={SignIn} />
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}

