import React from "react";
import Topbar from "./components/topbar/Topbar";
import Login from "./login/Login";
import Register from "./register/Register";
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Settings from "./settings/Settings";
import Single from "./pages/single/Single";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Aboutus from "./pages/aboutus/Aboutus";

const App = () => {
  const user = true;
  return (
    <Router>
      <Topbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/aboutus">
          <Aboutus />
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
