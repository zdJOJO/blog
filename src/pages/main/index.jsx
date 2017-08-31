import React from "react";
import {observer} from "mobx-react";
import {Switch, Route, Redirect, Link } from "react-router-dom";

import { createComponent } from "../../routes/routes";
import Page1 from "bundle-loader?lazy&name=page1!./page1";
import Page2 from "bundle-loader?lazy&name=page2!./page2";
import myMainStore from "./mainStore";
import "./main.scss";

const links = [
  { href: "/main/page1", icon: "add", label: "Page1" },
  { href: "/main/page2", icon: "inbox", label: "Page2" }
];

const Header = observer(() => (
  <div
  >
    <nav 
      type="horizontal"
    >
      {
        links.map( (ele,index) => (
          <Link key={index} to={ele.href}>{ele.label}</Link>
        ))
      }
    </nav>
  </div>
));

const MainContent = () => (
  <main>
    <Switch>
      <Route path="/main/page1" component={createComponent(Page1)} />
      <Route path="/main/page2" component={createComponent(Page2)} />
    </Switch>
  </main>
);

const Main = () => (
  <div>
    <Header />
    <MainContent />
  </div>
);

export default Main ;