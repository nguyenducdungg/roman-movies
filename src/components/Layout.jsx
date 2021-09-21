import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from '../routes/Routes';
import Footer from './footer/Footer';
import Header from './navbar/Navbar';


const Layout = (props) => {
    return (
        <BrowserRouter>
            <Route
                render={(props) => (
                    <>
                        <Header />
                        <Routes />
                        <Footer />

                    </>
                )}
            />
        </BrowserRouter>
    )
}

export default Layout
