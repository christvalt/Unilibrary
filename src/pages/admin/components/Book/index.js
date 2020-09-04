import React, { Component } from "react";
import Home from "../pages/home/home";

import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";
import Details from "../pages/home/details";
import SignIn from "../pages/auth/signIn";
import SignUp from "../pages/auth/signup";
import Admin from "../pages/admin/index";
import AddBook from "../pages/admin/components/addBook";
import UpdateBook from "../pages/admin/components/updateBook";
import readBook from "../pages/admin/components/readBook";
import ListBook from "../pages/admin/components/listBook";
import DeleteBook from "../pages/admin/components/deleteBook";
import ListBoorows from "../pages/admin/components/boorow/listBoorows";
import AllBoorowNotReturn from "../pages/admin/components/boorow/allBoorowNotReturn";
import BorowByUserNotreturned from "../pages/admin/components/boorow/borowByUserNotreturned";

import Join from "../components/Join/Join";
import Chat from "../components/Chat/Chat";
import Categories from "../components/categorie";




//import DetailRead from "../pages/home/DetailRead";

const Router = (props) => {
  let routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/book/:id" component={Details} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/admin" component={Admin} />
      <Route path="/addBook" component={AddBook} />
      <Route path="/updateBook" component={UpdateBook} />
      <Route path="/readBook" component={readBook} />
      <Route path="/listBook" component={ListBook} />
      <Route path="/deleteBook" component={DeleteBook} />
      <Route path="/listBoorows" component={ListBoorows} />
      <Route path="/allBoorowNotReturn" component={AllBoorowNotReturn} />
      <Route path="/borowByUserNotreturned" component={BorowByUserNotreturned} />
      <Route path="/join" component={Join} />
      <Route path="/Chat" component={Chat} />
      <Route path="/Categories" component={Categories} />
    </Switch>
  );

  if (true) {
    return (
      <BrowserRouter>
        <Header {...props} />
        {routes} <Footer />
      </BrowserRouter>
    );
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
