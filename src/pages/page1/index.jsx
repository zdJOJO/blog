import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import User from "./user";


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
          <li key={item.id}><Link to={`${match.url}/user/${item.id}`}>{item.name}</Link></li>
        ))
      }
    </ul>
    <Route path={`${match.url}/user/:userId`} component={User}/>
  </div>
);

export default Page1;
