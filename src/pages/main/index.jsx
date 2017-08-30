import React from "react";
import {observer} from "mobx-react";
import {Switch, Route, Redirect, Link } from "react-router-dom";

import Navigation from "react-toolbox/lib/navigation";
import LinkButton from "../../components/linkButton";
import AppBar from "react-toolbox/lib/app_bar";
import {IconButton} from "react-toolbox/lib/button";

import { createComponent } from "../../routes/routes";
import Page1 from "bundle-loader?lazy&name=page1!./page1";
import Page2 from "bundle-loader?lazy&name=page2!./page2";
import myMainStore from "./mainStore";
import appTheme from "./main.scss";

const links = [
  { href: "/main/page1", icon: "add", label: "Page1" },
  { href: "/main/page2", icon: "inbox", label: "Page2" }
];

const Header = observer(() => (
  <AppBar 
    title="测试测试"
    leftIcon="reorder"
    fixed
    theme={appTheme}
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
            href={ele.href} 
            flat={!(myMainStore.focus&& myMainStore.linkIndex===index)}
            raised={myMainStore.focus && myMainStore.linkIndex===index}
            primary={myMainStore.focus && myMainStore.linkIndex===index}
            onMouseOver={()=>{myMainStore.handleMouse(true, index)}}
            onMouseOut={()=>{myMainStore.handleMouse(false, index)}}
          />
        ))
      }
    </Navigation>
  </AppBar>
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