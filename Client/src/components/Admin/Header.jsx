import React from 'react';
import { GoBell } from "react-icons/go";
const Header = () => {
    const currentDateTime = new Date().toLocaleString('en-GB', {
        timeZone: 'GMT',
        hour12: true,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <div className="header">
            <div className="date-time">{currentDateTime} GMT</div>
            <div className="notification-icon">
                <GoBell />
                <span className="notification-dot"></span>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <button>
                    <img src="path_to_search_icon" alt="Search" />
                </button>
            </div>
        </div>
    );
};

export default Header;
