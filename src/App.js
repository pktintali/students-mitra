import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Explore from './components/Explore';
import Quiz from './components/Quiz';
import Home from './components/Home.js';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

export const NavContext = React.createContext()
function App() {
	
	const[visible,setVisible] = useState(true)
	
     const hide = (a)=>{
     setVisible(a)
     }
	
  return (
  <Router>
   <ScrollToTop />
    <div className="App">
    <NavContext.Provider value = {hide}>
       {visible&&<Nav />}
      <Switch>
         <Route path = '/' exact component = {Home} />
         <Route path = '/explore' component = {Explore} />
         <Route path = '/quiz' component = {Quiz} />
      </Switch>
    </NavContext.Provider>
    </div>
   </Router>
  );
}

export default App;
