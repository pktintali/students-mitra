import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Explore,
  FeedBackPage,
  Game,
  Home,
  LoginPage,
  Notifications,
  Privacy,
  Profile,
  Quiz,
  Settings,
  Signup,
  Terms,
  Test,
} from "../components";

const Routes = () => {
  return (
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
      <Route path="/privacy-policy" component={Privacy} />
      <Route path="/terms-of-uses" component={Terms} />
      <Route path="/notifications" component={Notifications} />
    </Switch>
  );
};

export default Routes;
