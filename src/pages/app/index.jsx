import React from "react";
import {observer} from "mobx-react";
import {Switch, Route, Redirect, Link } from "react-router-dom";

import Navigation from "react-toolbox/lib/navigation";
import LinkButton from "../../components/linkButton";
import AppBar from "react-toolbox/lib/app_bar";
import {IconButton} from "react-toolbox/lib/button";

import { createComponent } from "../../routes/routes";
import HelloWorld from "bundle-loader?lazy&name=hello!../helloWorld";
import Page1 from "bundle-loader?lazy&name=page1!../page1";
import Page2 from "bundle-loader?lazy&name=page2!../page2";
import myAppStore from "./appStore";

const links = [
  { href: "/", icon: "home", label: "Home" },
  { href: "/page1", icon: "add", label: "Page1" },
  { href: "/page2", icon: "inbox", label: "Page2" }
];

const Header = observer(() => (
  <AppBar 
    title="测试测试"
    leftIcon="reorder"
  >
    <Navigation 
      type="horizontal"
    >
      {
        links.map( (ele,index) => (
          <LinkButton 
            key={index}
            icon={ele.icon} 
            label={ele.label} 
            flat={!(myAppStore.focus&& myAppStore.linkIndex===index)}
            raised={myAppStore.focus && myAppStore.linkIndex===index}
            primary={myAppStore.focus && myAppStore.linkIndex===index}
            href={ele.href} 
            onMouseOver={()=>{myAppStore.handleMouse(true, index)}}
            onMouseOut={()=>{myAppStore.handleMouse(false, index)}}
          />
        ))
      }
    </Navigation>
  </AppBar>
));

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

export default App ;