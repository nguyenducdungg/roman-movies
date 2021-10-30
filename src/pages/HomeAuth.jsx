import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Route, useHistory } from "react-router-dom";
import SignUp from '../components/signup_login/SignUp';
import SignIn from '../components/signup_login/SignIn';
import authCtx from "../components/Context/context";


const HomeAuth = () => {
    const { authUser } = useContext(authCtx);
    const history = useHistory();

    useEffect(() => {
        if (authUser) {
            history.push("/");
        }
    }, [authUser, history])

    return (
        <div className="background-base">
            <Container >
                <div className="h-100 pt-3">
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

export default HomeAuth;
