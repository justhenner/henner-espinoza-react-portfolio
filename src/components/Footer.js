import React from 'react';

function Footer() {
    return (
        <div className='navbar fixed-bottom justify-content-center'>
            <ul className="nav ">
                <li className="nav-item">
                    <a className="nav-link  text-secondary" target='_blank' href="https://www.linkedin.com/in/hennerespinoza/" >LinkedIn</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  text-secondary" target='_blank' href="https://github.com/justhenner">GitHub</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  text-secondary" target='_blank' href="https://medium.com/@henner.espinoza">Medium</a>
                </li>
            </ul>
        </div>
    )
};

export default Footer;