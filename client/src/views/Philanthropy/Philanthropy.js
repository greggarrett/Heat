//this file was built from the contents of home.js
//the logo was removed and placeholder text added 

import React from 'react';
// import logo from '../../assets/club_logo.png';
import './Philanthropy.css';
import logo1 from '../../assets/philanthropy1.jpg';
import logo2 from '../../assets/philanthropy2.jpg'

function Philanthropy() {
    return (
        <div className="App1">
            <div className="App-header1">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <div className = "philhead">
                    <br/>
                    <h1> PHILANTHROPY </h1>
                </div>
                <p>
                    {/* Edit <code>src/App.js</code> and save to reload. */}
                    
                    Alpha Omicron Pi was founded on a promise to serve not only one another but the greater community as well. This commitment reflects a philosophy of friendship, concern, and usefulness in the world.
                    
                </p>
                <div class="row">
                    <div class="column">
                        <img src={logo1} alt="logo1" width = "86.40%" />
                    </div>
                    <div class="column">
                        <img src={logo2} alt="logo2" width = "100.00%" />
                    </div>
                </div>
                <br/>
                <div className = "philhead">
                    <h1>
                        OUR INTERNATIONAL PHILOSOPHY
                
                    </h1>
                </div>
                <div className = "servicestatement">
                    <p>
                    Serving the world around us is one of AOII’s founding principles. While local chapters are encouraged to support philanthropic opportunities in their communities, all chapters support AOII’s international philanthropy, which is arthritis. Since 1967, the Fraternity has enjoyed an important partnership with the Arthritis Foundation. AOII's philanthropic mission is to raise money for and spread awareness and understanding of arthritis and its more than 100 related diseases.
                    </p>
                    <p>
                    Dollars donated to the Arthritis Foundation support arthritis research, Juvenile Arthritis Power Packs, Juvenile Arthritis Camps and Conferences and so much more.
                    </p>
                </div>
                <br/>
                <div className = "philhead">
                    <h1>
                        STRIKE OUT ARTHRITIS
                    </h1>
                </div>
                <div className = "servicestatement">
                    <p>
                    By holding Strike Out Arthritis! events, AOII is collectively able to contribute millions of dollars toward education initiatives, assistance for families affected by arthritis, and new research that will hopefully one day find a cure!
                    </p>
                </div>
                <br/>
                <div className = "philhead">
                    <h1>
                        SUPPORTING THE AOII FOUNDATION
                    </h1>
                </div>
                <div className = "servicestatement">
                    <p>
                    The promise to serve can be seen in the relationships between sisters as we work together to help others, or contribute to the AOII Foundation to enable scholarships and aid to other sisters.
                    </p>
                    <p>
                    The AOII Foundation’s Mission Statement is to invest in our sisters and inspire a lifetime of giving to innovative leadership, educational and philanthropic causes. We are proud to support the AOII Foundation which is able to offer our members academic and leadership scholarship opportunities, as well as grants and emergency assistance to sisters in dire need.
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

export default Philanthropy;