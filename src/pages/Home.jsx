import React from 'react'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Helmet from '../components/Helmet'
import Rate from '../components/Rate/Rating/Rate';
import RatedAverage from '../components/Rate/RateAverage/RatedAverage';
const Home = () => {
    return (
        <Helmet title="Home">
            <Header />
            <div>đây là home</div>
            <RatedAverage />
            <Rate size={100} />
            <Footer />
        </Helmet>
    )
}

export default Home;