import React from 'react'
import StickyNav from './components/StickyNav'
import ScrollButton from './components/ScrollButton'
import Welcome from './sections/Welcome'
import About from './sections/About'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Leadership from './sections/Leadership'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
import NotFound from './sections/NotFound'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'

const RedirectToNotFound = () => <Navigate to="/oop" />;

const App = () => (
    <>
        <Router>
            <StickyNav/>
            <Routes>
                <Route path="/" element={<><Welcome/><About/><Experience/><Projects/></>}/>
                <Route path="/about" element={<><About/><Education/></>}/>
                <Route path="/experience" element={<><Experience/><Leadership/></>}/>
                <Route path="/projects" element={<Projects/>}/>
                {/* Error route */}
                <Route path="*" element={<RedirectToNotFound />} />
                <Route path="/oop" element={<NotFound />} />
            </Routes>
            <ScrollButton />
            <Footer/>
        </Router>
    </>
);

export default App