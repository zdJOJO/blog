import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import {
  HelloWorldContainer,
  Page1Container,
  Page2Container
} from "./routes";

const Header = () => (
  <header>
    <nav>
      <Link to="/">home</Link>
      <Link to="/page1">page1</Link>
      <Link to="/page2">page2</Link>
    </nav>
  </header>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HelloWorldContainer}/>
      <Route path="/page1" component={Page1Container} />
      <Route path="/page2" component={Page2Container}/>
    </Switch>
  </main>
);

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

export default function () {
  // 用来判断本地浏览器是否支持刷新
  const supportsHistory = "pushState" in window.history;
  return (
    <BrowserRouter forceRefresh={!supportsHistory}>
      {App()}
    </BrowserRouter>
  );
}