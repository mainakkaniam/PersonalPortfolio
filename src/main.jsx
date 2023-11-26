import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className="bg-slate-300/20">
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About/>} /> 
          <Route path="/projects" element={<Projects/>} /> 
          <Route path="/contact" element={<Contacts/>} /> 
      </Routes>
      </BrowserRouter>
      </main>
  </React.StrictMode>,
)
