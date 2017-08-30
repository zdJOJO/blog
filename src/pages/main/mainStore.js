import {observable, action} from "mobx";
import myFetch from "../../utils/http";

class MainStore {

  @observable focus = false;
  @observable linkIndex = 0;
  
  @action handleMouse = (bool, index) => {
    this.focus = bool;
    this.linkIndex = index;
  }
}

const myMainStore = new MainStore();
export default myMainStore;