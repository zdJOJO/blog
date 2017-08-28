import React, { Component } from "react";
import {observer} from "mobx-react";

import "../../style.scss";
import myHelloStore from "./hellowStore";

@observer
class HelloWorld extends Component{
  render(){
    return(                 
      <div className="testColor">
        WelCome!!   hellow world !!!!dgdsfsdfsdfd
        <div className="inside">
          {myHelloStore.timer}
        </div>
      </div>  		
    );
  }
}

export default HelloWorld;