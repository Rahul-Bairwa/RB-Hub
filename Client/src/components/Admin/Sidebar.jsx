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
        <NavLink to="/admin/dashboard" className="sidebar-item" activeClassName="active">
          <FaTachometerAlt className="sidebar-icon" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/admin/analytics" className="sidebar-item" activeClassName="active">
          <FaChartPie className="sidebar-icon" />
          <span>Analytics</span>
        </NavLink>
        <NavLink to="/admin/products" className="sidebar-item" activeClassName="active">
          <FaBox className="sidebar-icon" />
          <span>Products</span>
        </NavLink>
        <NavLink to="/admin/payment" className="sidebar-item" activeClassName="active">
          <FaCreditCard className="sidebar-icon" />
          <span>Payment</span>
        </NavLink>
        <NavLink to="/admin/orders" className="sidebar-item" activeClassName="active">
          <FaShoppingCart className="sidebar-icon" />
          <span>Orders</span>
        </NavLink>
        <NavLink to="/admin/enquiry" className="sidebar-item" activeClassName="active">
          <FaEnvelope className="sidebar-icon" />
          <span>Enquiry</span>
        </NavLink>
        <NavLink to="/admin/marketing" className="sidebar-item" activeClassName="active">
          <FaBullhorn className="sidebar-icon" />
          <span>Marketing</span>
        </NavLink>
        <NavLink to="/admin/setting" className="sidebar-item" activeClassName="active">
          <FaCog className="sidebar-icon" />
          <span>Setting</span>
        </NavLink>
        <NavLink to="/admin/user" className="sidebar-item" activeClassName="active">
          <FaUser className="sidebar-icon" />
          <span>User</span>
        </NavLink>
        <NavLink to="/admin/Logout" className="sidebar-item" activeClassName="active">
          <FaSignOutAlt className="sidebar-icon" />
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;