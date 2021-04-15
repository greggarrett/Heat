import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './Header.css';

export class Header extends Component{
    render(){
        return (
            
            <Navbar bg = "dark" expand = "lg">
            <Navbar.Brand href="/Home">
                <img src={"/small_logo.png"} style={{width:100, marginTop: -7}} className="d-inline-block align-top"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
            <Navbar.Collapse id = "basic-navbar-nav">
            <Nav>
            <NavItem>
                <NavLink className="d-inline p-2 bg-dark text-white" to='/about'>About</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="d-inline p-2 bg-dark text-white" to='/philanthropy'>Philanthropy</NavLink>
            </NavItem>
            <Nav.Item>
                <Nav.Link className="d-inline p-2 bg-dark text-white" 
                        href="https://www.facebook.com/ufaopi/photos/?ref=page_internal">
                        Photo Gallery<i className="fas fa-external-link-alt external-link" data-fa-transform="up-6 right-4"></i>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="d-inline p-2 bg-dark text-white" 
                        href="https://www.facebook.com/ufaopi/photos/?ref=page_internal">
                        Calendar<i className="fas fa-external-link-alt external-link" data-fa-transform="up-6 right-4"></i>
                </Nav.Link>
            </Nav.Item>
            <NavItem>
                <NavLink className="d-inline p-2 bg-dark text-white" to='/contact'>Contact</NavLink>
            </NavItem>
            </Nav>
            </Navbar.Collapse>
            </Navbar>   
            
        )
    }
}

// const Header = () => {
//     return (
//         <div className='topnav'>
//             {/* Logo */}
//             <Link id="logo-link" to="/">
//                 <img className="topnav-logo" src={ "/small_logo.png" } alt="React logo" />
//             </Link>

//             {/* Page Links */}
//             <div className="topnav-right">
//                 <Link className="topnav-link" to='/about'>About</Link>
//                 <Link className="topnav-link" to='/philanthropy'>Philanthropy</Link>
//                 <a className="topnav-link" target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/ufaopi/photos/?ref=page_internal">
//                     Photo Gallery
//                     <i className="fas fa-external-link-alt external-link" data-fa-transform="up-6"></i>
//                 </a>
//                 <a className="topnav-link" target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/AOIIFraternity/events/?ref=page_internal">
//                     Calendar
//                     <i className="fas fa-external-link-alt external-link" data-fa-transform="up-6 right-4"></i>
//                 </a>
//                 <Link className="topnav-link" to="/contact">Contact</Link>
//             </div>
//         </div>
//     )
// }

export default Header;
