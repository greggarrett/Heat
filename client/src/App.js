import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import About from "./views/About/About"
import Philanthropy from "./views/Philanthropy/Philanthropy"
import Contact from "./views/Contact/Contact"
import Calendar from "./views/Calendar/Calendar"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"


const App = () => {
  return (
    <div className = "topnav">
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Philanthropy" component={Philanthropy} />   
        <Route exact path="/Calendar" component={Calendar} />   
        <Route exact path="/Contact" component={Contact} />   
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
