import {observable, action, computed} from "mobx";

import img1 from "../../../static/img/bk-1.jpg";
import img2 from "../../../static/img/bk-2.jpg";
import img3 from "../../../static/img/bk-3.jpg";
import img4 from "../../../static/img/bk-4.jpg";
import {hex_sha1} from '../../utils/sha1';
import myFetch from "../../utils/http";
import MyToast from "../../components/toast";

class HomeStore {

  toast; // 弹框
  timer;
  num = 0;
  imgList = [img2, img1, img3, img4];

  initalState = {
    autoFocus: true,
    canEscapeKeyClose: true,
    canOutsideClickClose: true,
    enforceFocus: true,
    hasBackdrop: false,
    inline: false
  };

  /*
    NONE = -1,
    PRIMARY = 0,
    SUCCESS = 1,
    WARNING = 2,
    DANGER = 3,
  */
  loginButtons = [
    {
      label: "Sign in",
      type: "submit",
      intent: 1,
      action: ()=>{this.handleSubmit()}
    },
    {
      label: "Create an account",
      intent: 0,
      action: ()=> {
        this.loginInfo.clear();
        this.actionButtons = this.signUpButtons;
        this.activeInputGroup = this.signUpInputGroup;
        this.initalLoginInfo();
      }
    }
  ];
  loginInputGroup = [
    {
      leftIconName: "user",
      property: "username",
      placeholder:"please fill in the account",
      intent: 0,
      required: true
    },
    {
      leftIconName: "lock",
      property: "password",
      placeholder:"please fill in the password",
      intent: 0,
      type: "password",
      required: true
    }
  ];

  signUpButtons = [
    {
      label: "Sign up",
      type: "submit",
      intent: 1,
      action: ()=>{this.handleSubmit()}
    },
    {
      label: "Back",
      intent: 3,
      action: ()=> {
        this.loginInfo.clear();
        this.actionButtons = this.loginButtons;
        this.activeInputGroup = this.loginInputGroup;
        this.initalLoginInfo();
      }
    }
  ];
  signUpInputGroup = [
    {
      leftIconName: "user",
      property: "username",
      placeholder:"create an account",
      text: `match the user name can only letters at the beginning, can take the number, "_", "." String, enter 5-20 letters`,
      intent: 0,
      required: true
    },
    {
      leftIconName: "lock",
      property: "password1",
      placeholder:"create a password",
      text: `The password consists of more than 6 letters and numbers, including at least one letter and number, and can not consist of pure numbers or letters. And can not be pure numbers, can not be pure letters, must contain a letter and number`,
      intent: 0,
      type: "password",
      required: true
    },
    {
      leftIconName: "lock",
      property: "password2",
      placeholder:"please fill in the password again",
      text: `The password consists of more than 6 letters and numbers, including at least one letter and number, and can not consist of pure numbers or letters. And can not be pure numbers, can not be pure letters, must contain a letter and number`,
      intent: 0,
      type: "password",
      required: true
    },
    {
      leftIconName: "envelope",
      property: "email",
      placeholder:"please fill in the email" ,
      type: "email",
      intent: 0
    }
  ];

  //当前的 Buttons
  @observable actionButtons = this.loginButtons;

  //当前的 InputGroup
  @observable activeInputGroup = this.loginInputGroup;

  // 必填项： 数据是否合法
  @observable isRequiredDataLegal = false;

  @observable imgIndex = 0;
  @observable loginModalShow = false;

  //存储 登录
  loginInfo = observable.map({});

  //初始化 登录信息
  @action initalLoginInfo = ()=>{
    this.activeInputGroup.forEach( ele =>{
      this.loginInfo.set(ele.property, '');
    });
  };

  @action changeImg =()=>{
    this.timer = setInterval(()=>{
      this.num ++ ;
      this.imgIndex  = this.num % 4;
    }, 8000);
  };

  @action showLoginModal =(bool)=>{
    this.loginModalShow = bool;
    if(bool){
      this.actionButtons = this.loginButtons;
      this.activeInputGroup = this.loginInputGroup;
      this.initalLoginInfo();
    }
  };

  @action handleChange = (property, event) => {
    this.loginInfo.set(property, event.target.value);
  };

  @action handleBlur = (property, index) => {
    //匹配邮箱
    let patrn = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if(index===0){
      //匹配用户名 只能输入5-20个以字母开头、可带数字、“_”、“.”的字串  
      patrn = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
    }else if(index===1||index===2){
      //匹配密码 密码由6位以上的字母和数字组成， 至少包含一个字母和数字， 不能由纯数字或字母组成。并且不能为纯数字， 不能为纯字母， 必须包含一个字母和数字。
      patrn = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
    }
    let isRight = this.isRegisterUserName(patrn, this.loginInfo.get(property));
    this.activeInputGroup[index].intent = !isRight ? 3 : 1 ;
    if(index!==3)
      this.isRequiredDataLegal = isRight;
  };

  //按enter键
  @action handleKeyUp = (event) => {
    if(event.target.value === 13){
      console.log('提交');
    }
  };

  //  注册 || 登录 提交
  @action handleSubmit = (callback=null) => {
    if(!this.toast)
      this.toast = new MyToast("TOP_RIGHT");
    let obj = {};
    this.loginInfo.forEach((value, key)=>{
      if ( key==="password" || key==="password1" || key==="password2" ){
        obj[key] = hex_sha1(value);
      }else {
        obj[key] = value ;
      }
    });
    if(!this.isLoginTab){
      if (obj.password1 !== obj.password2) {
        this.toast.error("the password entered is not the same", 5000);
        return false;
      }else {
        obj.password = obj.password1;
      }
    }
    if(!this.isRequiredDataLegal){
      this.toast.error("please fill in the correct information", 5000);
      return false;
    }
    let url = this.isLoginTab ? "/api/login" : "/api/signup";
    myFetch(url, "post", obj)
      .then( json => {
        if(json.status===0){
          if(this.isLoginTab){
            this.toast.success("login success", 2000);
            callback&&callback();
          }else {
            this.toast.success("sign up success", 2000);
            this.actionButtons = this.loginButtons;
            this.loginInfo.clear();
            this.activeInputGroup = this.loginInputGroup;
            this.initalLoginInfo();
          }
        }else {
          this.toast.error(json.msg, 5000, {
            text: "Retry",
            onClick: ()=>{
              this.handleSubmit(callback);
            }
          });
        }
      });
  };

  // 登录 还是 注册
  @computed get isLoginTab (){
    return this.activeInputGroup.length===2 ;
  }

  isRegisterUserName = (patrn, str) => {    
    return patrn.exec(str);  
  }
  
}

export default HomeStore;