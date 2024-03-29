// //this file was built from the contents of home.js
// //the logo was removed and placeholder text added 

// import React from 'react';
// // import logo from '../../assets/club_logo.png';
// import '../Home/Home.css';



// function Home() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <body>
//                     <iframe src="//calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23D81B60&amp;ctz=America%2FNew_York&amp;src=YW9waXJ1bGVzQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%230B8043" width="100%" height="100%" frameborder="0"></iframe>
//                     {/* 
//                      style="border:solid 1px #777" width="200" height="200" frameborder="0" scrolling="no">
//                     <iframe src="http://localhost:3000/Home"></iframe> */}

//                 </body> 
//             </header>
//         </div>
//     );
// }

// export default Home;

import React, { Component } from 'react';
//import { getEvents } from './gcal'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import events from './events'
import 'react-big-calendar/lib/css/react-big-calendar.css';

class App extends React.Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     events: []
  //   }
    
  // }
  // componentDidMount () {
  //   getEvents((events) => {
  //     this.setState({
  //       events,
  //     })
  //   })
  // }
  render () {
    const views = ['month', 'week', 'day'];
    const messages = {
      previous: 'back',
      next: 'next'
    };
    const localizer = momentLocalizer(moment)
    return (
      <Calendar
        events={events}
        localizer = {localizer}
        style={{height: '620px'}}
        views={views}
        messages={messages}
      />
    )
  }
}
export default App