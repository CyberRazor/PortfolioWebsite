import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Showreel from './pages/Showreel'
import Credits from './pages/Credits'
import Contact from './pages/Contact'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import HeaderLink from './components/HeaderLink'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <main id="main"className='m-0 p-0 w-dvw flex-row'>
        
        <div id="SideBar" className='flex m-0 p-0'>
        <Sidebar />
        <div id="contentWindow" className="flex-col w-dvw">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Showreel" element={<Showreel />}/>
          <Route path="/Credits" element={<Credits />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
        </div>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
