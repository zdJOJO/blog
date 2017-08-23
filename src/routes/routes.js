import React, { Component } from "react";
import Bundle from "../utils/Bundle";
import HelloWorld from "bundle-loader?lazy!../pages/helloWorld";
import Page1 from "bundle-loader?lazy!../pages/page1";
import Page2 from "bundle-loader?lazy!../pages/page2";

export const HelloWorldContainer = () => (
  <Bundle load={HelloWorld}>
    {Component => <Component />}
  </Bundle>
);

export const Page1Container = () => (
  <Bundle load={Page1}>
    {Component => <Component />}
  </Bundle>
);

export const Page2Container = () => (
  <Bundle load={Page2}>
    {Component => <Component />}
  </Bundle>
);