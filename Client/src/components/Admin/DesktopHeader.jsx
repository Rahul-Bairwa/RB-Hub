import React, { useEffect, useRef } from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const DesktopHeader = () => {
  const currentDateTime = new Date().toLocaleString('en-GB', {
    timeZone: 'GMT',
    hour12: true,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  const notificationCount = 13;
  return (
    <div className="header-container" >
      <div className="welcome-section">
        <h2 className='admin-name'>Welcome, Rahul</h2>
        <p className='date-time'>{currentDateTime} GMT</p>
      </div>
      <div className="notification-icon">
        <IoNotificationsOutline className="icon" />
        <span className="notification-badge">{notificationCount}</span>
        <div className="border-right"></div>
      </div>
      <form className="search-section">
        <input type="text" placeholder="Search" className="search-input" />
        <button type='submit' className='search-btn'><IoIosSearch className="search-icon" /></button>
      </form>
    </div>
  );
};

export default DesktopHeader;