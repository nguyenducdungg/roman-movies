import React, { useState, useEffect } from 'react';
import { Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import "../../assets/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/all.css";
import InfoApi from "../utils/InfoApi";
const Description = ({ params }) => {
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
    const createNotification = () => {
        NotificationManager.warning('Máy bạn đã bị hacker tấn công, vui lòng donate cho chúng tôi để bảo mật kịp thời', 'Thông báo khẩn cấp', 5000);
    }

    return (
        <>
            {oneMovie ? (
                <div className="description-movie">
                    <div className="background" style={{ backgroundImage: `url(${oneMovie.imagebackgroundlink})` }}>
                    </div>
                    <div className="container-info">
                        <div className="info-avata column">
                            <img src={oneMovie.imagelink} alt="avatar-movies" className="info-avata-images" />
                            {/* <Movies value={oneMovie.movielink} /> */}
                            <Link to={`/watchmovie/${params.id}`}>
                                <button className="btn-watch" alt="movies"><i className="fas fa-play icon-watch-movies">Xem Phim</i></button>
                            </Link>
                        </div>
                        <div className="info-description column">
                            <div className="info-description__main">
                                <h1 className="item title">{oneMovie.moviename}</h1>
                                <h2 className="item subtitle">{oneMovie.movienamevn} <a href="#top">({oneMovie.year})</a></h2>
                                <div className="item">
                                    <span>{oneMovie.timeduration} <i className="fas fa-registered" title="Có thể có cảnh bạo lực, ngôn ngữ không hay"></i></span>
                                </div>
                                <div className="item">
                                    <span><i className="fab fa-imdb"></i>7.2</span>
                                </div>
                                <div className="genres item">
                                    <div className="left">
                                        <div className="left-item" onClick={() => createNotification()} >
                                            <button className="btn-fb"><i className="fab fa-facebook-square"></i> Facebook</button>
                                        </div>
                                        <div className="left-item" onClick={() => createNotification()} >
                                            <button className="btn-share"><i className="fas fa-plus"></i> Bộ sưu tập</button>
                                        </div>
                                    </div>
                                    <div className="right">
                                        {oneMovie.typemovie.map((e, index) => {
                                            return <div className="right-item" key={index} >
                                                <button className="btn-right-item">{e}</button>
                                            </div>
                                        })}


                                    </div>
                                </div>
                                <dl className="item info-general">
                                    <dt>ĐẠO DIỄN</dt>
                                    <dd className="csv">
                                        <a href="#top">David Lowery</a>
                                    </dd>
                                    <dt>QUỐC GIA</dt>
                                    <dd className="csv">
                                        <a href="#top">{oneMovie.national}</a>
                                    </dd>
                                    <dt>KHỞI CHIẾU</dt>
                                    <dd><a href="#top">{oneMovie.timeduration}</a></dd>
                                </dl>
                                <div className="description item">{oneMovie.description}</div>
                                <h3 className="item">
                                    Diễn viên
                                </h3>
                                <div className="cast item">
                                    {oneMovie.actors.map((e, index) => {
                                        return (
                                            <div className="cast-item" key={index}>{e}</div>
                                        )
                                    })}


                                </div>
                                <h3 className="item">
                                    TRAILER
                                </h3>
                                <div className="trailer item">
                                    <div className="trailer-clip active">
                                        <Trailer value={oneMovie.trailerlink} />

                                    </div>
                                    <div className="trailer-clip" >
                                        <img src="//img.youtube.com/vi/D9b13sshpx0/mqdefault.jpg" alt="trailer" className="trailer-img" />
                                    </div>
                                    <div className="trailer-clip" >
                                        <img src="//img.youtube.com/vi/sS6ksY8xWCY/mqdefault.jpg" alt="trailer" className="trailer-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                <>
                    <div className="loading"></div>
                </>
            )}
            <NotificationContainer />
        </>

    )
}
export default Description;

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={false}
        >
            <div className="modal-close" aria-label="close" onClick={props.onHide}>
            </div>
            <div className="video-responsive">
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${props.values}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </Modal>
    );
}

function Trailer({ value }) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <img src="//img.youtube.com/vi/D9b13sshpx0/mqdefault.jpg" onClick={() => setModalShow(true)} alt="trailer" className="trailer-img" />

            <MyVerticallyCenteredModal
                values={value}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
function MyMovieModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={false}
        >
            <div className="modal-close" aria-label="close" onClick={props.onHide}>
            </div>
            <div className="video-responsive">
                <div className="modal-remove"></div>
                <iframe
                    width="100%"
                    height="50%"
                    src={`https://drive.google.com/file/d/${props.values}/preview`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded google"
                />
                <div className="modal-remove-popup"></div>
            </div>
        </Modal>
    );
}
function Movies({ value }) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Link to='/watchmovie'>
                <button className="btn-watch" onClick={() => setModalShow(true)} alt="movies"><i className="fas fa-play icon-watch-movies">Xem Phim</i></button>
            </Link>
            <MyMovieModal
                values={value}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
