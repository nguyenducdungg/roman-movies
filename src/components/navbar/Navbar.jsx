import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom";
import "./navbar.css"
import logo from "../../assets/images/logo-roman2.png"
import Admin from "../Context/context";

const Navbar = () => {
    const history = useHistory();
    const { isAdmin, authUser } = useContext(Admin);
    const username = JSON.parse(localStorage.getItem("user"))

    const handleLogout = () => {
        if (window.confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
            localStorage.removeItem('user')
            history.push("/");
            window.location.reload();
        }
    }

    const [isUser, setIsUser] = useState(false);
    useEffect(() => {
        if (authUser && authUser.role === 'guest') {
            setIsUser(true)
        }
    }, [authUser, setIsUser])

    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <div className={isScrolled ? "header scrolled" : "header"}>
            <div className="navbar-container">


                {isAdmin ? (
                    <>
                        <div className="navbar-start">
                            <Link to="/">
                                <img src={logo} alt="" className="image-nav" />
                            </Link>
                        </div>
                        <div className="navbar-end">
                            <Link to="/">
                                <button className="loginButton" onClick={() => handleLogout()}>Logout Admin</button>
                            </Link>
                        </div>
                    </>
                ) : isUser ? (
                    <>
                        <div className="navbar-logo">
                            <label className="navbar-mobile" htmlFor="navbar-mobile-input">
                                <i className="fas fa-bars"></i>
                            </label>
                            <div className="navbar-mobile">
                                <Link to="/">
                                    <img src={logo} alt="" className="image-nav-mobile" />
                                </Link>
                            </div>
                        </div>
                        <input type="checkbox" id="navbar-mobile-input" name="" className="navbar-input" hidden />
                        <label className="navbar-overplay" htmlFor="navbar-mobile-input"></label>
                        <div className="navbar-mobile-left">
                            <ul className="navbar-mobile-list">
                                <li className="navbar-mobile-li nav-user"><i className="fas fa-user"></i><span className="navbar-mobile-link">{username.username}</span></li>
                                <li className="navbar-mobile-li"><i className="fas fa-exclamation-circle"></i><span className="navbar-mobile-link">Tài khoản</span></li>
                                <Link to="/type/show"><li className="navbar-mobile-li"><i className="fas fa-donate"></i> <span className="navbar-mobile-link">Donate</span></li></Link>
                                <li className="navbar-mobile-li"><i className="fas fa-film"></i><span className="navbar-mobile-link">Bộ sưu tập</span></li>
                                <li className="navbar-mobile-li" onClick={() => handleLogout()}><i className="fas fa-sign-out-alt"></i><span className="navbar-mobile-link">Đăng xuất</span></li>
                                <hr className="navbar-hr" />
                                <Link to="/type/movie"><li className="navbar-mobile-li"><span className="navbar-mobile-link">Phim Lẻ</span></li></Link>
                                <Link to="/type/show"><li className="navbar-mobile-li"><span className="navbar-mobile-link">Phim Bộ</span></li></Link>
                                <Link to="/type/movie"><li className="navbar-mobile-li"><span className="navbar-mobile-link">Tất cả phim</span></li></Link>
                                <li className="navbar-mobile-li"><span className="navbar-mobile-link">Liên Hệ</span></li>
                            </ul>
                        </div>
                        <Link to="/search">
                            <span className="icon-search-navbar navbar-link-mobile"><i className="fas fa-search"></i> Tìm Kiếm</span>
                        </Link>
                        <div className="navbar-pc">
                            <div className="navbar-start">
                                <Link to="/">
                                    <img src={logo} alt="" className="image-nav" />
                                </Link>
                                <Link to="/search">
                                    <span className="icon-search-navbar navbar-link"><i className="fas fa-search"></i> Tìm Kiếm</span>
                                </Link>
                                <Link to="/type/movie">
                                    <span className="navbar-link">Phim Lẻ</span>
                                </Link>
                                <Link to="/type/show">
                                    <span className="navbar-link">Phim Bộ</span>
                                </Link>
                                <Link to="/type/movie">
                                    <span className="navbar-link">Tất Cả Phim</span>
                                </Link>
                                <span className="navbar-link">Contact</span>
                            </div>
                            <div className="navbar-end">
                                <div className="navbar-link navbar-end-menu">
                                    <span>Hello, {username.username}  <i className="fas fa-chevron-down"></i></span>
                                </div>
                                <div className="navbar-menu-dropdown">
                                    <ul className="menu-dropdown">
<<<<<<< HEAD
                                        <li className="item-dropdown"><i class="fas fa-user icon-dropdown"></i><a href="#top" className="a-menu-dropdown">   Tài Khoản</a></li>
                                        <Link to="/type/show"><li className="item-dropdown"><i class="fas fa-donate icon-dropdown"></i><a href="#top" className="a-menu-dropdown">   Donate</a></li></Link>
                                        <li className="item-dropdown"><i class="fas fa-film icon-dropdown"></i><a href="#top" className="a-menu-dropdown">   Bộ sưu tập</a></li>
=======
                                        <li className="item-dropdown"><i className="fas fa-user icon-dropdown"></i><a href="#top" className="a-menu-dropdown">   Tài Khoản</a></li>
                                        <li className="item-dropdown"><i className="fas fa-donate icon-dropdown"></i><a href="#top" className="a-menu-dropdown">   Donate</a></li>
                                        <li className="item-dropdown"><i className="fas fa-film icon-dropdown"></i><a href="#top" className="a-menu-dropdown">   Bộ sưu tập</a></li>
>>>>>>> 5211c5cbee8bd9acc2a7c2d202949062d72fad90
                                        <li className="item-dropdown" onClick={() => handleLogout()}>
                                            <i className="fas fa-sign-out-alt icon-dropdown"></i>
                                            <Link to="/">
                                                <a href="#top" className="a-menu-dropdown">Logout</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </>

                ) : (
                    <>
                        <div className="navbar-logo">
                            <label className="navbar-mobile" htmlFor="navbar-mobile-input">
                                <i className="fas fa-bars"></i>
                            </label>
                            <div className="navbar-mobile">
                                <Link to="/">
                                    <img src={logo} alt="" className="image-nav-mobile" />
                                </Link>
                            </div>
                        </div>
                        <input type="checkbox" id="navbar-mobile-input" name="" className="navbar-input" hidden />
                        <label className="navbar-overplay" htmlFor="navbar-mobile-input"></label>
                        <div className="navbar-mobile-left" style={{ paddingTop: "20px" }}>
                            <ul className="navbar-mobile-list">
                                <Link to="/auth/sign-in">
                                    <li className="navbar-mobile-li loginButton-mobile">
                                        <i className="fas fa-user"></i>
                                        <span className="navbar-mobile-link">Đăng nhập</span>
                                    </li>
                                </Link>
                                <Link to="/auth/sign-up">
                                    <li className="navbar-mobile-li">
                                        <i className="fas fa-registered"></i>
                                        <span className="navbar-mobile-link">Đăng ký</span>
                                    </li>
                                </Link>
                                <hr className="navbar-hr" />
                                <Link to="/type/movie"><li className="navbar-mobile-li"><span className="navbar-mobile-link">Phim Lẻ</span></li></Link>
                                <Link to="/type/show"><li className="navbar-mobile-li"><span className="navbar-mobile-link">Phim Bộ</span></li></Link>
                                <Link to="/type/movie"><li className="navbar-mobile-li"><span className="navbar-mobile-link">Tất cả phim</span></li></Link>
                                <li className="navbar-mobile-li"><span className="navbar-mobile-link">Liên Hệ</span></li>
                            </ul>
                        </div>
                        <Link to="/search">
                            <span className="icon-search-navbar navbar-link-mobile"><i className="fas fa-search"></i> Tìm Kiếm</span>
                        </Link>
                        <div className="navbar-pc">
                            <div className="navbar-start">
                                <Link to="/">
                                    <img src={logo} alt="" className="image-nav" />
                                </Link>
                                <Link to="/search">
                                    <span className="icon-search-navbar navbar-link"><i className="fas fa-search"></i> Tìm Kiếm</span>
                                </Link>
                                <Link to="/type/movie">
                                    <span className="navbar-link">Phim Lẻ</span>
                                </Link>
                                <Link to="/type/show">
                                    <span className="navbar-link">Phim Bộ</span>
                                </Link>
                                <Link to="/type/movie">
                                    <span className="navbar-link">Tất Cả Phim</span>
                                </Link>
                                <span className="navbar-link">Contact</span>
                            </div>
                            <div className="navbar-end">
                                <div className="navbar-link navbar-end-menu">
                                    <Link to="/auth/sign-in">
                                        <button className="loginButton">Đăng nhập</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div >
    )
}

export default Navbar

