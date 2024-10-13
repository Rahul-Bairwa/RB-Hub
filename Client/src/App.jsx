import React from 'react'
import './app.css'
import { Route, Routes } from 'react-router-dom'
import {Login ,Signup, Header} from './index'
import Home from './Pages/Home'
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App