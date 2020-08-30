import React from 'react'
import StickyNav from './components/StickyNav'
import Welcome from './sections/Welcome'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Resume from './sections/Resume'
import './App.css'

function App() {
    return (
        <>
            <StickyNav/>
            <Welcome/>
            <Experience/>
            <Projects/>
            <Resume/>
        </>
    )
}

export default App