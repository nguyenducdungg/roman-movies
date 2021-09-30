import React, { useState, useEffect } from 'react'
import './watch.css'
import InfoApi from "../utils/InfoApi";
const WatchMovie = ({ params }) => {
    const [oneMovie, setOneMovie] = useState();
    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await InfoApi.getMovie(params.id)
                const data = await response.data;
                setOneMovie(data)
            } catch (error) {
                console.error(error);
            }
        }
        getMovie();
    }, [params.id]);
    return (
        <div className="aaaa">
            <iframe
                width="100%"
                height="100%"
                src={`https://drive.google.com/file/d/${oneMovie.movielink}/preview`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded google"
                className="cccc"
            />
        </div>

    );
}

export default WatchMovie