import { useState } from 'react'
import { motion } from "motion/react"
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </> 
  )
}

export default App
