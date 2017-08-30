import {observable, action} from "mobx";

import img1 from "../../../static/img/bk-1.jpg";
import img2 from "../../../static/img/bk-2.jpg";
import img3 from "../../../static/img/bk-3.jpg";

class HomeStore {

  timer;
  num = 0;
  imgList = [img2, img1, img3];

  @observable imgIndex = 0;

  @action changeImg =()=>{
    this.timer = setInterval(()=>{
      this.num ++ ;
      this.imgIndex  = this.num % 3;
    },8000);
  }
}

export default HomeStore;