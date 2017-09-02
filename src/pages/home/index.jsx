import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { observer } from "mobx-react";

import { Button, Icon } from "@blueprintjs/core";

import FormModal from '../../components/formModal';
import HomeStore from "./homeStore";

import "./home.scss";

@observer
class Home extends Component{

  myHomeStore = new HomeStore();

  componentDidMount(){
    this.myHomeStore.changeImg();
  }

  handleClose=()=>{
    this.myHomeStore.showLoginModal(false);
  };

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
          head={<span>{this.myHomeStore.isLoginTab ? "Sign in to Blog" : "Create an account"}</span>}
          loginInfo={this.myHomeStore.loginInfo}
          isOpen={this.myHomeStore.loginModalShow} 
          inputGroup={this.myHomeStore.activeInputGroup}
          buttons={this.myHomeStore.actionButtons}
          onChange={this.myHomeStore.handleChange}
          onBlur={this.myHomeStore.handleBlur}
          onSubmit={()=>{
            this.myHomeStore.handleSubmit(()=>{
              this.props.history.push("/main/page1");
            });
          }}
          onKeyUp={this.handleKeyUp}
          onClose={this.handleClose}
          {...this.myHomeStore.initalState}
        />
      </div>  		
    );
  }
}

export default withRouter(Home);