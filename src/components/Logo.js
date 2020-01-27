import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Img from 'react-image';
import gogLogo from 'assets/gog-logo.png'

const Logo = () => (
    <div className='logo'>
        <Router>
            <Link to={'/'}>
                <Img src={gogLogo}/>
            </Link>
        </Router>
    </div>

);

export default Logo;
