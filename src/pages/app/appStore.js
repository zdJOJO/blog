import {observable, action} from "mobx";
import myFetch from "../../utils/http";

class AppStore {

  @observable focus = false;
  @observable linkIndex = 0;
  
  @action handleMouse = (bool, index) => {
    this.focus = bool;
    this.linkIndex = index;
  }
}

const myAppStore = new AppStore();
export default myAppStore;