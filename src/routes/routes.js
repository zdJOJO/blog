import React, { Component } from "react";
import Bundle from "../utils/Bundle";

const Loading = () => (
  <div>loading...</div>
);

export const createComponent = component => () => (
  <Bundle load={component}>
    { Component => Component?<Component />:<Loading/> }
  </Bundle>
);