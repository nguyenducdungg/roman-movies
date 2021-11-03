import React from 'react'
import Helmet from '../components/Helmet'
import AllMovies from '../components/AllMovies'
const SeriesMovie = () => {
    return (
        <div className="background-base">
            <Helmet title="SeriesMovie">
                <AllMovies />
                <br />
            </Helmet>
        </div>
    )
}

export default SeriesMovie;