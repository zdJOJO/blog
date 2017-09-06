import React from "react";
import { Icon } from "@blueprintjs/core";

const MyIcon = ({...props}) =>{
  if(props.iconName){
    return <Icon {...props}/> ;
  }else{
    return <span className={`fa fa-${props.faIconName}`} /> ;
  }
};

export default MyIcon;