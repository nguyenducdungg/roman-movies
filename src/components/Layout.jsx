import React, { useState } from 'react'

import { BrowserRouter, Route } from 'react-router-dom';
import Routes from '../routes/Routes';
import Footer from './Footer/Footer';
import Header from './Header/Header';

export const TrailerContext = React.createContext();
export const TrailerProvider = (props) => {
    const [status, setStatus] = useState(
        false
    )
    const [id, setId] = useState();
    const updateStatus = () => {
        setStatus(!status);
    }
    const changeEmbedId = (id) => {
        setId(id)
    }

    return (
        <TrailerContext.Provider value={{ status, updateStatus,id ,changeEmbedId}}>
            {props.children}
        </TrailerContext.Provider>
    );
};

const Layout = (props) => {
    return (
        <TrailerProvider>
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
        </TrailerProvider>
    )
}

export default Layout
