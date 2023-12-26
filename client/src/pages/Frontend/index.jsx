import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'

export default function index() {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                </Routes>
            </main>
        </>
    )
}
