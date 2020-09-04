import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Piano from './components/Piano'
import store from './store'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
        <Router> 
          <div className="App">
            <div></div>
              <Switch>
                  <Route exact path="/chord-finder" component={Piano}></Route>
              </Switch>
          </div>
      </Router>
    </Provider>
      

  );
}

export default App;
