import React, { lazy, Suspense } from 'react'
import './app.css'
import { Route, Routes } from 'react-router-dom'
import { MainHeader, Login, Signup, Home } from './index';
const LazyLoad = ({ Component }) => (
  <Suspense fallback="Loading...">
    <Component />
  </Suspense>
)
const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MainHeader />
        <Routes>
          <Route path='/' element={<LazyLoad Component={Home} />} />
          <Route path='/signup' element={<LazyLoad Component={Signup} />} />
          <Route path='/login' element={<LazyLoad Component={Login} />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
