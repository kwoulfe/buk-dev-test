import React from 'react';
import logo from '../../assets/images/abc_logo.svg';
import ContactBtn from '../ContactBtn';
import NavMenu from '../NavMenu';
import './Nav.css';

const Nav = () => (
    <nav>
        <div id="logo">
            <a href='/'>
                <img src={logo} className="abc"
                alt="logo" />
            </a>
        </div>
        <ContactBtn />
        <NavMenu />
    </nav>
)

export default Nav;
