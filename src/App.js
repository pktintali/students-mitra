import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { firebase, ScrollToTop, Nav, LoadingScreen } from "./components/index";
import Routes from "./constants/routes";
import BackOnTop from "./components/utils/BackOnTop";
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
    initLizedFire && firebase.incrementCount();
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
            <div id="topbox" className="c-box-min"></div>
            <Routes />
            <div id="botbox" className="c-box-min"></div>
          </NavContext.Provider>
          <BackOnTop />
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
