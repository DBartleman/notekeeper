import React from 'react';
import '../stylesheets/navbar.css';
import { receiveUserReducer } from '../reducers/auth';


export default function Navbar() {
    const user = "Drew";
    return (
        <div className={"navbar"}>
            <div>Drewgle Keep</div>
            <input type={"text"} placeholder={"Search bar, currently disabled"}/>
            <div>Hello, {user}!</div>
        </div>
    );
}