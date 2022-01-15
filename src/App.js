import React from 'react'
import StickyNav from './components/StickyNav'
import Welcome from './sections/Welcome'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
import './App.css'

const App = () => (
    <>
        <StickyNav/>
        <Welcome/>
        <About/>
        <Experience/>
        <Projects/>
        <Footer/>
    </>
);

export default App