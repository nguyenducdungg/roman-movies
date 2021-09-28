import { Search } from "@material-ui/icons"
import { Link } from "react-router-dom";
import "./navbar.css"
import { useState } from "react";
import logo from "../../assets/images/logo-full.png"
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <div className={isScrolled ? "header scrolled" : "header"}>
            <div className="navbar-container">
                <div className="navbar-start">
                    <Link to="/">
                        <img src={logo} alt="" className="image-nav" />
                    </Link>
                    <Search className="icon" />
                    <span className="navbar-link">Phim Lẻ</span>
                    <span className="navbar-link">Phim Bộ</span>
                    <span className="navbar-link">Tất Cả Phim</span>
                    <span className="navbar-link">Contact</span>
                </div>

                <div className="navbar-end">
                    <Link to="/login">
                        <button className="loginButton">Đăng nhập</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
