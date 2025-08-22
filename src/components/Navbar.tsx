
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav style={{ background: '#222', padding: '1rem' }}>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginRight: '1rem' }}>
                    <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                </li>
                <li>
                    <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;