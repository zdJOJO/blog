import React, { Component } from "react";
import "./user.less";

const User = ({match}) => {
  return(
    <div>
      <h5 className="userName">我的ID: {match.params.userId}</h5>
    </div>
  );
};

export default User;