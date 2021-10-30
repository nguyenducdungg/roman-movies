import React from 'react'
import Helmet from '../components/Helmet'
import Search from '../components/Search'
const SeriesMovie = () => {
    return (
        <div className="background-base">
            <Helmet title="Search">
                <Search />
            </Helmet>
        </div>
    )
}

export default SeriesMovie;