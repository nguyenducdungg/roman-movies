import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import OddMovies from '../pages/OddMovies';
import SeriesMovie from '../pages/SeriesMovie';
import AllMovies from '../pages/AllMovies';
import Contact from '../pages/Contact';
import ForgotPassword from '../pages/ForgotPassword';
import Info from '../pages/Info';
const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/oddmovies" component={OddMovies} />
            <Route path="/seriesmovie" component={SeriesMovie} />
            <Route path="/allmovies" component={AllMovies} />
            <Route path="/contact" component={Contact} />
            <Route path="/forgot" component={ForgotPassword} />
            <Route path="/info/:slug" component={Info} />
        </Switch>
    )
}
export default Routes;