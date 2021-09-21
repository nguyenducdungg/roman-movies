import React from 'react'
import Helmet from '../components/Helmet'
import { SignIn } from '../components/signup_login/SignIn';
const Login = () => {
    return (
        <Helmet title="Login">
            <SignIn />
        </Helmet>
    )
}

export default Login;