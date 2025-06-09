import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './components/App/App.scss';
import { App } from './components/App/App.tsx'
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage.tsx';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

     <Provider store={store}>
        <Routes>
          <Route path='/*' element={ <App /> }/>
          <Route path='/registration' element={ <RegistrationPage/> }/>
        </Routes>
      </Provider>    
      
    </BrowserRouter>
  </StrictMode>,
)
