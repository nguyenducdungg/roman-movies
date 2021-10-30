import React from 'react'
import Helmet from '../components/Helmet'
// import Featured from '../components/featured/Featured'
import Movie from '../components/Movie/Movie'
const Home = () => {
    return (
        <div className="background-base">
            <Helmet title="Home">
                {/* <Featured /> */}
                <Movie />
            </Helmet>
        </div>
    )
}

export default Home;

