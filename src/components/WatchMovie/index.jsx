import React, { useState, useEffect } from 'react'
import './watch.css'
import InfoApi from "../utils/InfoApi";
import Rate from "../Rate/Rating/Rate"
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
        <>
            {oneMovie ? (
                <>
                    <div className="video-responsive-movie">
                        <div className="modal-remove"></div>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://drive.google.com/file/d/${oneMovie.movielink}/preview`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded google"
                            className="iframeMovie"
                        />
                        <div className="modal-remove-popup"></div>
                    </div>
                    <h1 className="watchmovie-title">{oneMovie.moviename} <Rate id={params.id}/></h1>
                    <div className="comment-session">
                        <h2 className="text-comment"><i class="fas fa-comments"></i> Comment</h2>
                        <form action="" className="form-comment">
                            <div className="input-form">
                                <textarea className="textarea" placeholder="Nhập bình luận..." rows="2" required name="content"></textarea>
                            </div>
                            <div className="btn-send">
                                <button className="btn-send-comment" type="submit">Send</button>
                            </div>
                        </form>
                    </div>

                </>
            ) : (
                <>
                    <div className="loading"></div>
                </>
            )}
        </>

    );
}

export default WatchMovie