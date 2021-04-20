import React from 'react';
import logo from '../../assets/aopiback2.png';
import './Home.css';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {/* Edit <code>src/App.js</code> and save to reload. */}
                </p>
                <div className = "title">
                    <h1>
                        Alpha Omicron Pi 
                    </h1>
                </div>
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
