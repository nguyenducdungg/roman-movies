import React from 'react';
import { Switch, Route } from "react-router-dom";
import PageMovieManager from '../components/PageMovieManager/index';
import EditMovie from '../components/PageMovieManager/EditMovie';
const RouteAdmin = () => {
    return (
        <Switch>
            <Route path="/" exact component={PageMovieManager} />
            <Route path="/:id" component={EditMovie} />
        </Switch>
    )
}
export default RouteAdmin;