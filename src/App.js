import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Explore from './components/Explore';
import Quiz from './components/Quiz';
import Home from './components/Home.js';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';

function App() {
  return (
  <Router>
    <div className="App">
      <Nav />
      <Switch>
         <Route path = '/webapp' exact component = {Home} />
         <Route path = '/webapp/explore' component = {Explore} />
         <Route path = '/webapp/quiz' component = {Quiz} />
      </Switch>
    </div>
   </Router>
  );
}

export default App;
