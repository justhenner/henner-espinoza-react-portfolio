import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Navigation from '../components/Navigation';

function Header() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                <h2 className='mr-5'>Henner Espinoza</h2>
                </div>
            
            
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/react-portfolio/" exact element={<About />} />
                    <Route path="/Portfolio" exact element={<Portfolio />} />
                    <Route path="/Contact" exact element={<Contact />} />
                    <Route path="/Resume" exact element={<Resume />} />
                </Routes>
            </Router>
            </div>
        </div>
    );
}

export default Header;