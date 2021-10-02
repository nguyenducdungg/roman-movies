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
                        <div className="navbar-start">
                            <Link to="/">
                                <img src={logo} alt="" className="image-nav" />
                            </Link>
                            <span className="icon-search-navbar navbar-link"><i className="fas fa-search"></i> Tìm Kiếm</span>
                            <span className="navbar-link">Phim Lẻ</span>
                            <span className="navbar-link">Phim Bộ</span>
                            <span className="navbar-link">Tất Cả Phim</span>
                            <span className="navbar-link">Contact</span>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-link">
                                <span>Hello, {username.username}</span>
                            </div>
                            <Link to="/">
                                <button className="loginButton" onClick={() => handleLogout()}>Logout</button>
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="navbar-start">
                            <Link to="/">
                                <img src={logo} alt="" className="image-nav" />
                            </Link>
                            <span className="navbar-link icon-search-navbar"><i className="fas fa-search"></i> Tìm Kiếm</span>
                            <span className="navbar-link">Phim Lẻ</span>
                            <span className="navbar-link">Phim Bộ</span>
                            <span className="navbar-link">Tất Cả Phim</span>
                            <span className="navbar-link">Contact</span>
                        </div>
                        <div className="navbar-end">
                            <Link to="/auth/sign-in">
                                <button className="loginButton">Đăng nhập</button>
                            </Link>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default Navbar

