import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Explore from "./components/Explore/Explore";
import Quiz from "./components/Test/Quiz";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import FetchRoom from "./components/Test/SingleSubject/Game/FetchRoom";
import Signup from "./components/auth/Signup";
import LoginPage from "./components/auth/LoginPage";
import firebase from "./components/firebase";
import LoadingScreen from "./components/LoadingScreen";

export const NavContext = React.createContext();
function App() {
  const [visible, setVisible] = useState(true);
  const [initLizedFire, setInitFire] = useState(false);

  const hide = (a) => {
    setVisible(a);
  };

  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setInitFire(val);
    });
  }, []);

  return initLizedFire !== false ? (
    <Router>
      <ScrollToTop />
      <div className="App">
        <NavContext.Provider value={hide}>
          {visible && <Nav />}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/test" component={Quiz} />
            <Route path="/play" component={FetchRoom} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </NavContext.Provider>
      </div>
    </Router>
  ) : (
    <LoadingScreen />
  );
}

export default App;
