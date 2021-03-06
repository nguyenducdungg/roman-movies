import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import OddMovies from '../pages/OddMovies';
import SeriesMovie from '../pages/SeriesMovie';
import AllMovies from '../pages/AllMovies';
import Contact from '../pages/Contact';
import ForgotPassword from '../pages/ForgotPassword';
import Info from '../pages/Info';
import HomeAuth from '../pages/HomeAuth';
import WatchMovie from '../pages/WatchMovie';
import Search from '../pages/Search';
import Collection from '../components/Collection/Collection';
import Account from '../components/Account/Account';
const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/type/show" component={OddMovies} />
            <Route path="/type/movie" component={SeriesMovie} />
            <Route path="/allmovies" component={AllMovies} />
            <Route path="/contact" component={Contact} />
            <Route path="/forgot" component={ForgotPassword} />
            <Route path="/info/:slug/:id" component={Info} />
            <Route path="/auth" component={HomeAuth} />
            <Route path="/watchmovie/:id" component={WatchMovie} />
            <Route path="/search" component={Search} />
            <Route path="/collection" component={Collection} />
            <Route path="/account" component={Account} />
        </Switch>
    )
}
export default Routes;