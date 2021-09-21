import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation, Route, Screen, Link, glide } from "react-tiger-transition";
import styled from "styled-components";
import Helmet from '../components/Helmet'
// import DescriptionMovies from '../components/DescriptionMovies';
import CosmicSin from "../assets/images/CosmicSin.jpg"
import backgroundCosmicSin from "../assets/images/backgroundCosmicSin.jpg"
glide({
    name: 'glide-left',
});
glide({
    name: 'glide-right',
    direction: 'right'
});


const Image = styled.img`
    width: fit-content;
    height: 50vh;
  
`;

const screenStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
   
};
const AllMovies = () => {

    return (
        <>
            <Helmet title="AllMovies">
                <Router>
                    <Navigation>
                        <Route exact path="/allmovies">
                            <Screen
                                style={{
                                   backgroundColor: "#becec9",
                                
                                }}
                            >

                                <Link to="/allmovies/description" transition='glide-left'>
                                    <img src={CosmicSin} width="200px" height="300px"/>
                                </Link>
                            </Screen>
                        </Route>

                        <Route
                            exact
                            path="/allmovies/description"
                            screen
                            screenProps={{
                                style: {
                                    backgroundColor: "#607d8b",
                                   
                                    ...screenStyle
                                }
                            }}
                        >
                            <Link to="/allmovies" transition='glide-right'>
                                <Image src={backgroundCosmicSin}/>
                            </Link>
                        </Route>
                    </Navigation>
                </Router>
            </Helmet>
        </>
    )
}

export default AllMovies;
