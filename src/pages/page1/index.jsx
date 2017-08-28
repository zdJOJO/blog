import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import {observer} from "mobx-react";

import User from "bundle-loader?lazy&name=user!./user";
import AddModal from "../../components/addModal";
import { createComponent } from "../../routes/routes";
import myPage1Store from "./page1Store";


@observer
class Page1 extends Component{

  componentDidMount(){
    if(myPage1Store.studentList.length === 0)
      myPage1Store.getStudentList();
    myPage1Store.inital();
  }

  render(){
    return(
      <div className="testColor">
        <h3>添加学生: </h3>
        <AddModal 
          columns={myPage1Store.studentInfo}
          addMap={myPage1Store.studentInfoMap}
          handleChange={myPage1Store.handleChange}
          handleSubmit={myPage1Store.handleSubmit}
        />
        <h3>学生列表:</h3>
        <ul>
          {
            myPage1Store.studentList.map( item => (
              <li key={item._id}>
                <Link to={`${this.props.match.url}/user/${item._id}`}>{item.name}</Link>
              </li>
            ))
          }
        </ul>
        <Route path={`${this.props.match.url}`} exact render={()=>(<h5>请选择一个人名</h5>)} />
        <Route path={`${this.props.match.url}/user/:userId`} component={createComponent(User)} />
      </div>
    );
  }
}

export default withRouter(Page1);

