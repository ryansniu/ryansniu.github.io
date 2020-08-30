import React from 'react'
import Navbar from './components/Navbar'
import Welcome from './sections/Welcome'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Resume from './sections/Resume'
import './App.css'

function App() {
    return (
        <>
            <Navbar/>
            <Welcome/>
            <Experience/>
            <Projects/>
            <Resume/>
        </>
    )
}

export default App