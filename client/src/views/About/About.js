//this file was built from the contents of home.js
//the logo was removed and placeholder text added 

import React from 'react';
// import logo from '../../assets/club_logo.png';
import './About.css';
import logo1 from '../../assets/aboutphoto.jpg';

function About() {
    return (
        <div className="App1">
            <div className="App-header1">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <div className = "abouthead">
                    <br/>

                <h1> ABOUT</h1>
                </div>
                    <p>
                    </p>
                
                     <p>
                    </p>
                    <p>  
                    </p>
                    <p> 
                     </p>

                <p>
                    {/* Edit <code>src/App.js</code> and save to reload. */}
                    
                
                    Alpha Omicron Pi Fraternity(AOII) was founded in 1897 at Barnard College of Columbia University in New York City. AOII has over 196,000 initiated members from more than 200 collegiate chapters and continues to be ever-growing. AOII’s ideals of sincerity, service and friendship serve as the foundation for the chapter. We aim to promote values of integrity, tolerance, generosity, love, and simplicity among our community. We encourage love and positivity which enable us to step foot into the world around us with  great confidence and character. We are guided by our cultural principles which are rooted to provide a deeper meaning to the services and membership of our chapter. Our Cultural Principles include: Accountability and Ownership, Collaboration, Engagement, Innovation, and Open and Honest Communication. 
                    
                </p>
                <p>
                <img src={logo1} className="App-logo1" alt="logo1" />
                </p>
                <p></p>
                <p>

                </p>
                <div className = "missstatement">
                    <h1>
                        MISSION STATEMENT
                
                    </h1>
                <p>
                “The object of this Fraternity shall be to encourage a spirit of Fraternity and love among its members; to stand at all times for character, dignity, scholarship, and college loyalty; to strive for and support the best interests of the colleges and universities in which chapters are installed, and in no way to disregard, injure, or sacrifice those interests for the sake of prestige or advancement of the Fraternity or any of its chapters.”
                </p>
                </div>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </div>
        </div>
    );
}

export default About;