import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Profile,
  firebase,
  LoginPage,
  Signup,
  ScrollToTop,
  Home,
  Quiz,
  Explore,
  Nav,
  LoadingScreen,
  Game,
  FeedBackPage,
  Settings,
} from "./components/index";
import Test from "./Test";

export const NavContext = React.createContext();

function App() {
  const [visible, setVisible] = useState(true);
  const [usermini, setUserMini] = useState();
  const [initLizedFire, setInitFire] = useState(false);
  const hide = (a) => {
    setVisible(a);
  };

  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setInitFire(val);
    });
  }, []);

  useEffect(() => {
   
    initLizedFire && firebase.getDpImage().then(setUserMini);
    usermini && window.sessionStorage.setItem("dpmin", usermini);
  }, [initLizedFire]);

  usermini && window.sessionStorage.setItem("dpmin", usermini);

  return initLizedFire !== false ? (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <div className="App">
          <NavContext.Provider value={hide}>
            {visible && <Nav />}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/explore" component={Explore} />
              <Route path="/test" exact component={Quiz} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={Signup} />
              <Route path="/profile" component={Profile} />
              <Route path="/game" component={Game} />
              <Route path="/feedback" component={FeedBackPage} />
              <Route path="/dev" component={Test} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </NavContext.Provider>
        </div>
      </Router>
    </Provider>
  ) : (
    <div className="App">
      <div className="w3-container w3-large w3-padding-large w3-red">
        Please Wait
      </div>
      <LoadingScreen />
    </div>
  );
}

export default App;
