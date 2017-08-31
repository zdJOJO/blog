import {observable, action} from "mobx";

import img1 from "../../../static/img/bk-1.jpg";
import img2 from "../../../static/img/bk-2.jpg";
import img3 from "../../../static/img/bk-3.jpg";

class HomeStore {

  timer;
  num = 0;
  imgList = [img2, img1, img3];

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
  @observable inputGroup = [
    {
      leftIconName: "user", 
      property: "username", 
      placeholder:"Plz fill in the account", 
      text: `match the user name can only letters at the beginning, can take the number, "_", "." String, enter 5-20 letters`, 
      intent: 0,
      required: true 
    },
    {
      leftIconName: "lock", 
      property: "password1", 
      placeholder:"Plz fill in the password", 
      text: `The password consists of more than 6 letters and numbers, including at least one letter and number, and can not consist of pure numbers or letters. And can not be pure numbers, can not be pure letters, must contain a letter and number`,
      intent: 0,
      type: "password",
      required: true 
    },
    {
      leftIconName: "lock", 
      property: "password2", 
      placeholder:"Plz fill in the password again", 
      text: `The password consists of more than 6 letters and numbers, including at least one letter and number, and can not consist of pure numbers or letters. And can not be pure numbers, can not be pure letters, must contain a letter and number`,
      intent: 0,
      type: "password",
      required: true 
    },
    {
      leftIconName: "envelope", 
      property: "email", 
      placeholder:"Plz fill in the email" ,
      type: "email",
      intent: 0
    }
  ]

  @observable imgIndex = 0;
  @observable loginModalShow = false;

  //存储 登录
  loginInfo = observable.map({});

  //初始化 登录信息
  @action initalLoginInfo = ()=>{
    this.inputGroup.forEach( ele =>{
      this.loginInfo.set(ele.property, '');
    });
  }

  @action changeImg =()=>{
    this.timer = setInterval(()=>{
      this.num ++ ;
      this.imgIndex  = this.num % 3;
    },8000);
  }

  @action showLoginModal =(bool)=>{
    this.loginModalShow = bool;
    if(bool)
      this.initalLoginInfo();
  }

  @action handleChange = (property, event) => {
    this.loginInfo.set(property, event.target.value);
  }


  @action hadnleBlur = (property, index) => {
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
    this.inputGroup[index].intent = !isRight ? 3 : 1 ;
  }

  //按enter键
  @action handleKeyUp = (event) => {
    if(event.target.value === 13){
      console.log('提交');
    }
  }

  isRegisterUserName = (patrn, str) => {    
    return patrn.exec(str);  
  }
  
}

export default HomeStore;