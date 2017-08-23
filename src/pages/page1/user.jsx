import React, { Component } from "react";

const User = ({match}) => {
  return(
    <div>
      <h5>{match.params.userId}</h5>
    </div>
  );
};

export default User;