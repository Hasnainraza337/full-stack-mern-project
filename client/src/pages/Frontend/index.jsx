import React from 'react'
import { Routes, Route } from "react-router-dom"

// components
import Header from "../../components/Header"
import Footer from "../../components/Footer"
// pages
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'

export default function index() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
