import React from "react";
import {observer} from "mobx-react";
import {Switch, Route } from "react-router-dom";

import { createComponent } from "../../routes/routes";

import Page1 from "bundle-loader?lazy&name=page1!./page1";
import Page2 from "bundle-loader?lazy&name=page2!./page2";
import Article from "bundle-loader?lazy&name=article!./article";
import ArticleDetail from "bundle-loader?lazy&name=articleDetail!./article/detail";

import NavBar from "../../components/navBar";
import UserSlider from "../../components/userSlider";
import myMainStore from "./mainStore";
import {myCookie} from "../../utils";
import "./main.scss";


const Footer = () => (
  <footer>
    <span>© 2017 zdJOJO</span>
    <span>年轻人稳重一点</span>
    <span>不要一言不合就开车</span>
  </footer>
);

const links = [
  // { href: "/main/page1", icon: "people", label: "Student" },
  { href: "/main/articles", icon: "manual", label: "Article" },
  { href: "/main/page2", icon: "highlight", label: "Create" },

  { href: "/main/articles", icon: "manual", label: "Article" },
  { href: "/main/articles", icon: "manual", label: "Article" },
  { href: "/main/articles", icon: "manual", label: "Article" },
  { href: "/main/articles", icon: "manual", label: "Article" }
];


const showStyle = {
  transition: "all 0.5s ease",
  right: "220px"
};
const Header = observer(() => 
  <div>
    <NavBar 
      style={myMainStore.isShowUserInfo ? showStyle : {right:　0, transition: "all 0.5s ease"}}
      links={links}
      isChooseTheme={myMainStore.isChooseTheme}
      handleChangeTheme={myMainStore.handleChangeTheme}
      showUserInfo={myMainStore.showUserInfo}
      showMobileSearch={myMainStore.showMobileSearch}
      isMobile={myMainStore.isMobile}
      isShowMobileSearch={myMainStore.isShowMobileSearch}
    />
    <UserSlider isShowUserInfo={myMainStore.isShowUserInfo} userInfo={myCookie.getCookie("userInfo") || {} }/>
    {myMainStore.isShowUserInfo && <div className="mask" onClick={()=>{myMainStore.showUserInfo(false)}}/>}
  </div>
);

const MainContent = () => (
  <main>
    <Switch>
      <Route path="/main/page1" component={createComponent(Page1)} />
      <Route path="/main/page2" component={createComponent(Page2)} />
      <Route path="/main/articles" component={createComponent(Article)} />
      <Route path="/main/article/:id" component={createComponent(ArticleDetail)} />
    </Switch>
  </main>
);

const Main = () => (
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>
);

export default Main ;