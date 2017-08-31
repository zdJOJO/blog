import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import classNames from "classnames";

import { Button, Icon, Intent } from "@blueprintjs/core";

import FormModal from '../../components/formModal';
import HomeStore from "./homeStore";

import "./home.scss";

@observer
class Home extends Component{

  myHomeStore = new HomeStore();

  componentDidMount(){
    //this.myHomeStore.changeImg();
  }

  handleClose=()=>{
    this.myHomeStore.showLoginModal(false);
  }

  render(){
    return(                 
      <div className="home">
        {
          this.myHomeStore.imgList.map((ele, index)=>{
            const style = {
              backgroundImage: `url(${ele})`,
              opacity: index===this.myHomeStore.imgIndex ? 1 : 0
            };
            return(
              <div
                key={index} 
                className="imgList"
                style={style} 
              />
            );
          })
        }
        <Button className="pt-minimal enterBtn" rightIconName="direction-right">
          <Link to="/main/page1">进入博客</Link>
        </Button>
        <Icon className="login" iconName="user"
          onClick={()=>{this.myHomeStore.showLoginModal(true)}}
        />
        <FormModal 
          loginInfo={this.myHomeStore.loginInfo}
          isOpen={this.myHomeStore.loginModalShow} 
          inputGroup={this.myHomeStore.inputGroup}
          onChange={this.myHomeStore.handleChange}
          onBlur={this.myHomeStore.hadnleBlur}
          onKeyUp={this.handleKeyUp}
          onClose={this.handleClose}
          {...this.myHomeStore.initalState}
        />
      </div>  		
    );
  }
}

export default Home;