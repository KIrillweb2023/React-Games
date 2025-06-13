import React, { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './components/App/App.scss';
import { App } from './components/App/App.tsx'
import AuthPage  from './pages/AuthPage/AuthPage.tsx';

const AuthPageLazy = React.lazy(() => import("./pages/AuthPage/AuthPage.tsx"));




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path='/*' element={ <App /> }/>
        <Route path='/authentication' element={ <AuthPageLazy/> }/>
      </Routes>
      
    </BrowserRouter>
  </StrictMode>,
)
