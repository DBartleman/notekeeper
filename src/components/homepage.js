import React from 'react';
import '../stylesheets/homepage.css';
import NoteArea from './noteArea';
import Navbar from './navbar';

export default function Homepage() {
    return (
        <>
            <Navbar />
            <NoteArea />
        </>
    );
}