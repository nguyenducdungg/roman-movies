import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthUser from './Context/context';
import PageMovieManager from './PageMovieManager/index';
import EditMovie from './PageMovieManager/EditMovie';
import { HomeAuth } from "../pages/HomeAuth"
import Home from "../pages/Home";

const Layout = (props) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("user")));

    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        if (authUser && authUser.role === 'admin') {
            setIsAdmin(true)
        }
    }, [authUser, setIsAdmin])

    return (
        <AuthUser.Provider value={{ authUser, setAuthUser }}>
            {isAdmin ? <Switch>  <Route path="/" exact component={PageMovieManager} />
                <Route path="/:id" component={EditMovie} />
            </Switch> :
                <Route path="/" exact component={Home} />
            }
            <Route path="/auth" component={HomeAuth} />
        </AuthUser.Provider>
    )
}

export default Layout
