//this file was built from the contents of home.js
//the logo was removed and placeholder text added 

import React from 'react';
// import logo from '../../assets/club_logo.png';
import '../Home/Home.css';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <p>
                    {/* Edit <code>src/App.js</code> and save to reload. */}
                    about the organization
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
        </div>
    );
}

export default Home;