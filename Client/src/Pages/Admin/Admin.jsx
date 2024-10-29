import React, { Suspense, useState } from 'react';
import '../../admin.css';
import { Route, Routes } from 'react-router-dom';
import { AdminHeader, Sidebar } from '../../index';
import Dashboard from '../../components/Admin/Dashboard';
const LazyLoad = ({ Component }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component/>
  </Suspense>
);
const Admin = () => {

  return (
    <div className='admin'>
      <div className="left-admin">
        <Sidebar />
      </div>
      <div className="right-admin">
        <AdminHeader/>
        <Routes>
          <Route path="/dashboard" element={<LazyLoad Component={Dashboard}/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
