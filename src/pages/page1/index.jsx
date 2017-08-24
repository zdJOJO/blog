import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";

//import User from "./user";
import User from "bundle-loader?lazy&name=user!./user";
import { createComponent } from "../../routes/routes";

const urls = [
  {id: "1000", name: "李雷"},
  {id: "1001", name: "韩梅梅"},
  {id: "1002", name: "大明"},
  {id: "1003", name: "小刚"}
];

const Page1 = ({match}) => (
  <div className="testColor">
    <h3>这个是Page1</h3>
    <ul>
      {
        urls.map( item => (
          <li key={item.id}>
            <Link to={`${match.url}/user/${item.id}`}>{item.name}</Link>
          </li>
        ))
      }
    </ul>
    <Route path={`${match.url}`} exact render={()=>(<h5>请选择一个人名</h5>)} />
    <Route path="/page1/user/:userId" component={createComponent(User)} />
  </div>
);

export default withRouter(Page1);

