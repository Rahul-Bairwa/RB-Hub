import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
const Admin = lazy(() => import('./Pages/Admin/Admin.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/*' element={<App />} />
          <Route path='/admin/*' element={<Admin/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
