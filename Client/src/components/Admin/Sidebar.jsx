import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaChartPie, FaBox, FaCreditCard, FaShoppingCart, FaEnvelope, FaBullhorn, FaCog, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <h2>Groth</h2>
      </div>
      <div className="sidebar-menu">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}
        >
          <FaTachometerAlt className="sidebar-icon" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/analytics"
          className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}
        >
          <FaChartPie className="sidebar-icon" />
          <span>Analytics</span>
        </NavLink>
        <NavLink
          to="/admin/products"
          className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}
        >
          <FaBox className="sidebar-icon" />
          <span>Products</span>
        </NavLink>
        <NavLink
          to="/admin/payment"
          className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}
        >
          <FaCreditCard className="sidebar-icon" />
          <span>Payment</span>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}
        >
          <FaShoppingCart className="sidebar-icon" />
          <span>Orders</span>
        </NavLink>
        <NavLink
          to="/admin/enquiry"
          className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}
        >
          <FaEnvelope className="sidebar-icon" />
          <span>Enquiry</span>
        </NavLink>
        <NavLink
          to="/admin/marketing"
          className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}
        >
          <FaBullhorn className="sidebar-icon" />
          <span>Marketing</span>
        </NavLink>
        <NavLink
          to="/admin/setting"
          className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}
        >
          <FaCog className="sidebar-icon" />
          <span>Setting</span>
        </NavLink>
        <NavLink
          to="/admin/user"
          className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}
        >
          <FaUser className="sidebar-icon" />
          <span>User</span>
        </NavLink>
        <NavLink
          to="/admin/logout"
          className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}
        >
          <FaSignOutAlt className="sidebar-icon" />
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
