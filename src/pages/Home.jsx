import React from 'react'
import Helmet from '../components/Helmet'
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/featured/Featured'
import Slider from '../components/slider/Slider'
const Home = () => {
    return (
        <Helmet title="Home">
            <Navbar />
            <Featured />
            <Slider />
            <Slider />
            <Slider />
        </Helmet>
    )
}

export default Home;