import React, { Component } from "react";
import {observer} from "mobx-react";

import HomeStore from "./homeStore";
import homeStyle from "./home.scss";

@observer
class Home extends Component{

  myHomeStore = new HomeStore();

  componentDidMount(){
    this.myHomeStore.changeImg();
  }

  render(){
    const style = {
      backgroundImage: `url(${this.myHomeStore.imgList[this.myHomeStore.imgIndex]})`
    };

    return(                 
      <div className={homeStyle.home}>
        <div 
          className={ homeStyle.imgList } 
          style={style} 
        />
      </div>  		
    );
  }
}

export default Home;