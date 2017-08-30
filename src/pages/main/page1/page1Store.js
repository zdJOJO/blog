import {observable, action} from "mobx";
import myFetch from "../../../utils/http";

class Page1Store {
 
  studentInfo = [
    {infoStr: "name", type: "text"},
    {infoStr: "age", type: "number"},
    {infoStr: "gender", type: "number"},
    {infoStr: "height", type: "number"},
    {infoStr: "weight", type: "number"}
  ];

  studentInfoMap = observable.map();

  @observable studentList = [];

  @action inital = () => {
    this.studentInfo.forEach(ele =>{
      let value = "", key = ele.infoStr;
      if(key==="age"){
        value = 15;
      }else if(key==="gender"){
        value = 1;
      }else if(key==="height"){
        value = 170;
      }else if(key==="weight"){
        value = 50;
      }
      this.studentInfoMap.set(key, value);
    });
  }
  
  //获取studen列表
  @action getStudentList = ()=>{
    myFetch("/school/student")
      .then( json => {
        this.studentList = json.result.data;
      });
  }

  @action handleChange = (key, event) => {
    this.studentInfoMap.set(key, event.target.value);
  }

  @action handleSubmit = () => {
    let obj = {};
    this.studentInfoMap.forEach((value, key)=>{
      obj[key] = value;
    });
    myFetch("/school/student/add", "post", obj)
      .then( json => {
        if(json.status === 0){
          this.studentList.push(json.result);
          this.inital();
        }
      });
  }
}

const myPage1Store = new Page1Store();
export default myPage1Store;