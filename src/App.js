import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Piano from './components/Pages/Piano'
import Links from './components/Pages/Links'

function App() {
  return (

      <Router> 
          <div className="App">
              <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/about" component={About}></Route>
                  <Route exact path="/piano" component={Piano}></Route>
                  <Route exact path="/links" component={Links}></Route>
              </Switch>
          </div>
      </Router>

  );
}

export default App;
