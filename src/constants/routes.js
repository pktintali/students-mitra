import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Admins,
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
  Learning,
  SubjectPage,
  Blogs,
  PostHandler,
  Dashboard,
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
      <Route path="/admins" component={Admins} />
      <Route path="/blogs" exact component={Blogs} />
      <Route path="/blogs/:topic" component={PostHandler} />
      <Route path="/learning" exact component={Learning} />
      <Route path="/learning/:subject" component={SubjectPage} />
      <Route path="/learnpk" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
