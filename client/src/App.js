import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import About from "./views/About/About"
import Philanthropy from "./views/Philanthropy/Philanthropy"
import Contact from "./views/Contact/Contact"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"


const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Philanthropy" component={Philanthropy} />   
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
