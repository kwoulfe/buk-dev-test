import React from 'react';
import './Link.css';

const Link = (props) => (
    <li>
        <a href={props.href}>{props.linkText}</a>
    </li>
);

export default Link;