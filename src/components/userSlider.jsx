import React from "react";

const UserSlider = ({...props}) =>{
  return(
    <div className={props.isShowUserInfo ? "userSlider show" : "userSlider"}>
      <span style={{color: "#ddd"}}>11111</span>
    </div>
  );
};

export default UserSlider;