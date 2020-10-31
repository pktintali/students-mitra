import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Explore from './components/Explore/Explore';
import Quiz from './components/Test/Quiz';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ResultPage from './components/Test/ResultPage';
import FetchRoom from './components/Test/SingleSubject/Game/FetchRoom';
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
         <Route path = '/play' component = {FetchRoom} />
      </Switch>
    </NavContext.Provider>
    </div>
   </Router>
  );
}

export default App;
