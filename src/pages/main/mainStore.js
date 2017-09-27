import {observable, action} from "mobx";

class MainStore {

  constructor() {
    this.ua = navigator.userAgent;
  }

  // theme主题颜色
  @observable isChooseTheme = true;

  //是否显示 userDetail
  @observable isShowUserInfo = false;

  //是否显示手机搜索
  @observable isShowMobileSearch = false;

  @observable linkIndex = 0;

  @observable isMobile = /Android/i.test(this.ua) || /BlackBerry/i.test(this.ua) || /IEMobile/i.test(this.ua) || /iPhone|iPad|iPod/i.test(this.ua);

  @action handleChangeTheme =()=> {
    this.isChooseTheme = !this.isChooseTheme;
  };

  @action showUserInfo =(bool=true)=> {
    this.isShowUserInfo = bool;
  };

  @action showMobileSearch = ()=> {
    this.isShowMobileSearch = !this.isShowMobileSearch;
  }
  
}

const myMainStore = new MainStore();
export default myMainStore;