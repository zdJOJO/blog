import React, { Component } from "react";
import {observer} from "mobx-react";

import FontIcon from "react-toolbox/lib/font_icon";
import Button from "react-toolbox/lib/button";
import LinkButton from "../../components/linkButton";

import HomeStore from "./homeStore";
import homeStyle from "./home.scss";

@observer
class Home extends Component{

  myHomeStore = new HomeStore();

  componentDidMount(){
    this.myHomeStore.changeImg();
  }

  render(){
    return(                 
      <div className={homeStyle.home}>
        {
          this.myHomeStore.imgList.map((ele, index)=>{
            const style = {
              backgroundImage: `url(${ele})`,
              opacity: index===this.myHomeStore.imgIndex ? 1 : 0
            };
            return(
              <div
                key={index} 
                className={ homeStyle.imgList } 
                style={style} 
              />
            );
          })
        }
        <Button icon="person" primary className={homeStyle.primary} />
        <LinkButton className={homeStyle.enterBtn} href="/main/page1" flat>
          <FontIcon className={homeStyle.icon} value="forward"/> 进入博客
        </LinkButton>
      </div>  		
    );
  }
}

export default Home;