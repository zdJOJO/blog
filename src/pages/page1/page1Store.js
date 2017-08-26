import {observable, action} from "mobx";
import myFetch from "../../utils/http";

class Page1Store {
  @observable studentList = [];

  //获取studen列表
  @action getStudentList = ()=>{
    myFetch("/school/student")
      .then( json => {
        this.studentList = json.result;
      })
      .catch( e =>{
        console.log(e);
      });
  };
}

const myPage1Store = new Page1Store();
export default myPage1Store;