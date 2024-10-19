import React, { lazy, Suspense } from 'react'
import './app.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
const Login = lazy(() => import('./components/Login'));
const Signup = lazy(() => import('./components/Signup'));
const Header = lazy(() => import('./components/Header'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
