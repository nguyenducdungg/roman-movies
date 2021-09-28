import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.css"
import InfoApi from "../axios/InfoApi";
import React, { useState, useEffect } from "react";
export default function Featured() {
    const [oneMovie, setOneMovie] = useState();

    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await InfoApi.getMovie("614c86404078ae0016fc8c44")
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
                                <PlayArrow />
                                <span>Xem Phim</span>
                            </button>
                            <button className="more">
                                <InfoOutlined />
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
