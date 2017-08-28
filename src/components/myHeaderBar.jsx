import React from "react";
import { AppBar } from "react-toolbox/lib/app_bar";
import theme from "./css//myHeaderBar.scss";

const MyHeaderBar = (props) => (
  <AppBar {...props} theme={theme} />
);

export default MyHeaderBar;