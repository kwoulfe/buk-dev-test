import React from 'react';
import './NavMenu.css';
import Link from '../Link';

const NavMenu = () => (
    <ul className="navMenu">
        <Link href="Industries" linkText="Industries" />
        <Link href="Services" linkText="Services" />
        <Link href="About" linkText="About Us" />
    </ul>
);

export default NavMenu;
