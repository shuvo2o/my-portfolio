import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        {/* Home route */}
        <Route index element={<Home />} />

        {/* Other routes */}
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
