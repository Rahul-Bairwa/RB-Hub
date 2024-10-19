import React, { lazy, Suspense } from 'react';
import Header from '../../components/Admin/Header';
import '../../admin.css';
import { Route, Routes } from 'react-router-dom';
const Dashboard = lazy(() => import('../../components/Admin/Dashboard'));
const Admin = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>} >
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Admin;
