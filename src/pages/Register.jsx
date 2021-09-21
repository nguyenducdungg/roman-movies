import React from 'react'
import Helmet from '../components/Helmet'
import { SignUp } from '../components/signup_login/SignUp';
const Register = () => {
    return (
        <Helmet title="Register" >
            <SignUp />
        </Helmet>
    )
}

export default Register;