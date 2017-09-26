import React from "react";
import {Switch, Route, Redirect } from "react-router-dom";

import "../../style.scss";

import { createComponent } from "../../routes/routes";
import Home from "bundle-loader?lazy&name=home!../home";
import Main from "bundle-loader?lazy&name=main!../main";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={createComponent(Home)} />
      <Route path="/main" component={createComponent(Main)} />
      <Redirect from="*" to="/main/page1" />
    </Switch>
  </div>
);

export default App;