import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import OddMovies from '../pages/OddMovies';
import SeriesMovie from '../pages/SeriesMovie';
import AllMovies from '../pages/AllMovies';
import Contact from '../pages/Contact';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import PageMovieManager from "../components/PageMovieManager/index";
import EditMovie from '../components/PageMovieManager/EditMovie';
const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/oddmovies" component={OddMovies} />
            <Route path="/seriesmovie" component={SeriesMovie} />
            <Route path="/allmovies" component={AllMovies} />
            <Route path="/contact" component={Contact} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/forgot" component={ForgotPassword} />
            <Route exact={true} path="/page-movie-manager" component={PageMovieManager} />
            <Route path="/page-movie-manager/:id" component={EditMovie} />
        </Switch>
    )
}
export default Routes;