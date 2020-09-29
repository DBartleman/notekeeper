import React from 'react';
import '../stylesheets/navbar.css';

export default function Navbar() {
    const user = "Drew";
    return (
        <div className={"navbar"}>
            <div>Drewgle Keep</div>
            <input type={"text"} placeholder={"Search"}/>
            <div>Hello, {user}!</div>
        </div>
    );
}