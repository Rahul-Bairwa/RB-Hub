import React, { Suspense, useEffect, useState } from 'react';
import '../../admin.css';
import { Route, Routes } from 'react-router-dom';
import { AdminMobileHeader, Dashboard, AdminDesktopHeader, Sidebar } from '../../index';
const LazyLoad = ({ Component }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);
const Admin = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className='admin'>
      <div className="left-admin">
        {!isMobile && <Sidebar />}
      </div>
      <div className="right-admin">
        {isMobile ? <AdminMobileHeader /> : <AdminDesktopHeader />}
        <Routes>
          <Route path="/dashboard" element={<LazyLoad Component={Dashboard} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
