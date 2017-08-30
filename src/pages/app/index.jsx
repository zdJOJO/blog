import React from "react";
import {Switch, Route, Redirect } from "react-router-dom";

import "../../style.scss";

import { createComponent } from "../../routes/routes";
import Home from "bundle-loader?lazy&name=hello!../home";
import Main from "bundle-loader?lazy&name=main!../main";

const Footer = () => (
  <footer>
    <div>
      <span>© 2017 zdJOJO</span>
      <span>年轻人稳重一点</span>
      <span>不要一言不合就开车</span>
    </div>
  </footer>
);

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={createComponent(Home)} />
      <Route path="/main" component={createComponent(Main)} />
      <Redirect from="*" to="/main/page1" />
    </Switch>
    <Footer />
  </div>
);

export default App ;