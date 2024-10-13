import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Logos/rb-hub-light.png";
import { IoIosSearch,IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
const Header = () => {
    const handleSearch = (e) => {
        e.preventDefault();
        console.log('searching...');
    }
    return (
        <header className="header">
            <div className="top-container ">
                <div className="top-bar container">
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link>ShopNow</Link></p>
                    <div className="language-selector">
                        <select>
                            <option value="english">English</option>
                            <option value="french">French</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="container">
                <nav className="navbar">
                    <div className="brand">
                        <img src={logo} alt="" />
                    </div>
                    <ul className="nav-links">
                        <li><Link to={'/'} >Home</Link></li>
                        <li><Link to={'/contact'} >Contact</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/signup'}>Sign Up</Link></li>
                    </ul>
                    <div className="right-nav">
                        <form onSubmit={handleSearch}>
                            <input type="text" placeholder="What are you looking for?" />
                            <button type="submit"><IoIosSearch /></button>
                        </form>
                        <div className="heart"><IoIosHeartEmpty/></div>
                        <div className="cart"><IoCartOutline/></div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
