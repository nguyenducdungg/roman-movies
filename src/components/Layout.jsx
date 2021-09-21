import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Footer/Footer';
import Footer from './Header/Header';

import Routes from '../routes/Routes'
const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={props => (
                <div>
                    <Footer {...props}/>
                    <div className="container">
                        <div className="main">
                            <Routes/>
                        </div>
                    </div>
                    <Header/>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
