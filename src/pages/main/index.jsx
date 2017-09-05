import React from "react";
import {observer} from "mobx-react";
import {Switch, Route, Redirect } from "react-router-dom";

import { createComponent } from "../../routes/routes";
import Page1 from "bundle-loader?lazy&name=page1!./page1";
import Page2 from "bundle-loader?lazy&name=page2!./page2";
import NavBar from "../../components/navBar";
import UserSlider from "../../components/userSlider";
import myMainStore from "./mainStore";
import "./main.scss";

const links = [
  { href: "/main/page1", icon: "manual", label: "Page1" },
  { href: "/main/page2", icon: "inbox", label: "Page2" }
];


const showStyle = {
  transition: "width 0.4s linear",
  width: "85%"
};
const Header = observer(() => 
  <div>
    <NavBar 
      style={myMainStore.isShowUserInfo ? showStyle : null}
      links={links}
      isChooseTheme={myMainStore.isChooseTheme}
      handleChangeTheme={myMainStore.handleChangeTheme}
      showUserInfo={myMainStore.showUserInfo}
    /> 
    {myMainStore.isShowUserInfo && <div className="mask" />}
    <div className={myMainStore.isShowUserInfo ? "slider-container" : ""}>
      <UserSlider
        isShowUserInfo={myMainStore.isShowUserInfo}
      />
    </div>
  </div>
);

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