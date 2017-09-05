import {observable, action} from "mobx";
import myFetch from "../../utils/http";

class MainStore {

  // theme主题颜色
  @observable isChooseTheme = false;

  //是否显示 userDetail
  @observable isShowUserInfo = false;

  @observable linkIndex = 0;

  @action handleChangeTheme =()=> {
    this.isChooseTheme = !this.isChooseTheme;
  }

  @action showUserInfo =()=> {
    this.isShowUserInfo = true;
  }
  
}

const myMainStore = new MainStore();
export default myMainStore;