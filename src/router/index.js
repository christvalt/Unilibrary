import React, { Component } from "react";
import Home from "../pages/home/home";

import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";
import Details from "../pages/home/details";
import DetailRead from "../pages/home/DetailRead";
import SignIn from "../pages/auth/signIn";
import SignUp from "../pages/auth/signup";
import Admin from "../pages/admin/index";
import Join from "../components/Join/Join";
import Chat from "../components/Chat/Chat";
//import DetailRead from "../pages/home/DetailRead";

const Router = () => {
  let routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/book" component={Details} />
      <Route path="/read" component={DetailRead} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/admin" component={Admin} />
      <Route path="/join" component={Join} />
      <Route path="/Chat" component={Chat} />
      
    </Switch>
  );

  if (true) {
    return <BrowserRouter>{routes}</BrowserRouter>;
  } else {
    return (
      <BrowserRouter>
        <Header />
        {routes}
        <Footer />
      </BrowserRouter>
    );
  }
};
export default Router;
