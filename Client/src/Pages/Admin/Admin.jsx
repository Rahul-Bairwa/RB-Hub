import React, { lazy, Suspense } from 'react';
import '../../admin.css';
import { Route, Routes } from 'react-router-dom';
import { AdminHeader, Dashboard,Sidebar } from '../../index';
const LazyLoad = ({ Component }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);
const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <AdminHeader />
      <Routes>
        <Route path="/dashboard" element={<LazyLoad Component={Dashboard} />} />
      </Routes>
    </div>
  );
};

export default Admin;
