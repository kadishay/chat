import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Login from './Login';
import Chat from './Chat';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/chat/:id" >
              <Chat />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;