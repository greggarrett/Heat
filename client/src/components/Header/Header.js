import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='topnav'>
            {/* Logo */}
            <Link id="logo-link" to="/">
                <img className="topnav-logo" src={ "/small_logo.png" } alt="React logo" />
            </Link>

            {/* Page Links */}
            <div className="topnav-right">
                <Link className="topnav-link" to='/about'>About</Link>
                <Link className="topnav-link" to='/philanthropy'>Philanthropy</Link>
                <a className="topnav-link" target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/ufaopi/photos/?ref=page_internal">
                    Photo Gallery
                    <i className="fas fa-external-link-alt external-link" data-fa-transform="up-6"></i>
                </a>
                <a className="topnav-link" target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/AOIIFraternity/events/?ref=page_internal">
                    Calendar
                    <i className="fas fa-external-link-alt external-link" data-fa-transform="up-6 right-4"></i>
                </a>
                <Link className="topnav-link" to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Header;
