import React from 'react'
import Helmet from '../components/Helmet'
import Featured from '../components/featured/Featured'
import Slider from '../components/Movie/Movie'
const Home = () => {
    return (
        <div className="background-base">
            <Helmet title="Home">
                <Featured />
                <Slider />
            </Helmet>
        </div>
    )
}

export default Home;

