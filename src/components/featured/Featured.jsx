import "./featured.css"
import InfoApi from "../axios/InfoApi";
import React, { useState, useEffect } from "react";
export default function Featured() {
    const [oneMovie, setOneMovie] = useState();

    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await InfoApi.getMovie("6154ac156b8a8f00163e6067")
                const data = await response.data;
                setOneMovie(data)
            } catch (error) {
                console.error(error);
            }
        }
        getMovie();
    }, []);
    return (
        <>
            {oneMovie ? (
                <div className="featured">
                    <img
                        className="featured-img"
                        src={oneMovie.imagebackgroundlink}
                        alt=""
                    />
                    <div className="info">

                        <span className="desc">
                            {oneMovie.description}
                        </span>
                        <div className="buttons">
                            <button className="play-home">
                                <i className="fas fa-play fa-play-featured"></i>
                                <span>Xem Phim</span>
                            </button>
                            <button className="more">
                                <i className="fas fa-exclamation-circle"></i>
                                <span>Trailer</span>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="loading"></div>
                </>
            )}
        </>
    )
}
