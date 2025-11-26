import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Route, Routes } from "react-router";
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
      <Route path='/about' element={<About/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/projects' element={<Projects/>} />
        </Route>
 
    </Routes>
  </BrowserRouter>,
)
