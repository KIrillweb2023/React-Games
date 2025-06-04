import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './components/App/App.scss';
import App from './components/App/App.tsx'
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path='/*' element={ <App /> }/>
        <Route path='/registration' element={ <RegistrationPage/> }/>
      </Routes>
      
    </BrowserRouter>
  </StrictMode>,
)
