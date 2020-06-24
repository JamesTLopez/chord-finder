import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Piano from './components/Pages/Piano'

function App() {
  return (

      <Router> 
          <div className="App">
              <Switch>
                  <Route exact path="/" component={Piano}></Route>

              </Switch>
          </div>
      </Router>

  );
}

export default App;
