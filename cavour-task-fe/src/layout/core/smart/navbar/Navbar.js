import React from 'react';
import './Navbar.scss';

export default function Navbar() {

    return <nav className='flex f-baseline'>
        <div className='logo'>Bl4ck Track ;)</div>
        <ul className='no-bullet flex'>
            <li>Dashboard</li>
            <li>Agile Board</li>
            <li>Reports</li>
            <li>Projects</li>
        </ul>
        <div>
            <button>New Issue</button>
        </div>
        <div className='account-section'>
            Account Sections
        </div>
    </nav>
}