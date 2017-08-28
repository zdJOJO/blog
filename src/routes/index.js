import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

import Navigation from "react-toolbox/lib/navigation";
import LinkButton from "../components/linkButton";
import MyHeaderBar from "../components/myHeaderBar";

import { createComponent } from "./routes";
import HelloWorld from "bundle-loader?lazy&name=hello!../pages/helloWorld";
import Page1 from "bundle-loader?lazy&name=page1!../pages/page1";
import Page2 from "bundle-loader?lazy&name=page2!../pages/page2";


const Header = () => (
  <MyHeaderBar title='React Toolbox' leftIcon='menu'>
    <Navigation type='horizontal'>
      <LinkButton href="/" icon='add' label='Page1' flat primary/>
      <LinkButton href="/page1" icon='add' label='Page1' flat primary/>
      <LinkButton href="/page2" icon='inbox' label='Page2' flat primary/>
    </Navigation>
  </MyHeaderBar>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={createComponent(HelloWorld)} />
      <Route path="/page1" component={createComponent(Page1)} />
      <Route path="/page2" component={createComponent(Page2)} />
      <Redirect from="*" to="/" />
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