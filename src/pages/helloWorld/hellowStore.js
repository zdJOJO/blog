import {observable, action} from "mobx";

class HelloWorldStore {
  @observable timer = "mobxmobxmobxmobxmobx"
}

const myHelloStore = new HelloWorldStore();
export default myHelloStore;