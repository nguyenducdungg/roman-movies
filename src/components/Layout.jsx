import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Routes from '../routes/Routes';
import Footer from './Footer/Footer';
import Navbar from '../components/navbar/Navbar';
import AuthUser from './Context/context';
import RouterAdmin from '../routes/RouterAdmin'

const Layout = (props) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        if (authUser && authUser.role === 'admin') {
            setIsAdmin(true)
        }
    }, [authUser, setIsAdmin])

    return (
        <AuthUser.Provider value={{ authUser, setAuthUser, isAdmin }}>
            {isAdmin ? (
                <BrowserRouter>
                    <Route
                        render={(props) => (
                            <>
                                <Navbar/>
                                <RouterAdmin />
                            </>
                        )}
                    />
                </BrowserRouter>
            ) : (
                <BrowserRouter>
                    <Route
                        render={(props) => (
                            <>
                                <Navbar />
                                <Routes />
                                <Footer />

                            </>
                        )}
                    />
                </BrowserRouter>
            )}

        </AuthUser.Provider>
    )
}

export default Layout
