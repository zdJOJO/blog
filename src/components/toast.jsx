/*
* 自定义 alert 全局提示框
* */

import { Intent, Position, Toaster } from "@blueprintjs/core";

class MyToast {

  constructor(position){
    this.selfToaster = Toaster.create({
      className: "my-toaster",
      position: Position[position] ||　Position.TOP
    });
  }

  showToast(){
    return this.selfToaster.show({message: "... ..."});
  }

  success (msg, delay=2000, action={}) {
    this.selfToaster.show({
      message: msg,
      iconName: "tick",
      intent: Intent.SUCCESS,
      action: action,
      timeout:　delay
    });
  }

  error (msg, delay=4000, action={}) {
    this.selfToaster.show({
      message: msg,
      iconName: "warning-sign",
      intent: Intent.DANGER,
      action: action,
      timeout:　delay
    });
  }

  warning (msg, delay=3000, action={}) {
    this.selfToaster.show({
      message: msg,
      iconName: "info-sign",
      intent: Intent.WARNING,
      action: action,
      timeout:　delay
    });
  }
}

const toast = new MyToast();

export { 
  MyToast, 
  toast 
};