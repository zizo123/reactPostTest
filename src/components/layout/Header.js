import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
    const headerStyle ={
        background: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px'
    }
    return (
        <header style={headerStyle}>
            <h1>header</h1>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </header>
    )
}
