import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./user.scss";

const User = ({match}) => {
  return(
    <div>
      <h5 className="userName">我的ID: {match.params.userId}</h5>
    </div>
  );
};

//export default User;
export default withRouter(User);