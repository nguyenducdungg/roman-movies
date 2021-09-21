import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from '../routes/Routes';
import Footer from './Footer/Footer';
import Header from './Header/Header';


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
