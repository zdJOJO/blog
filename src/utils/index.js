import moment from 'moment';


/**
 *  设置 Cookie
 **/

class Cookie {

  setCookie(name, value, time="30d"){
    if(typeof value === "object")
      value = JSON.stringify(value);
    let millisecond = this.getMillisecond(time);
    let exp = new Date();
    exp.setTime(exp.getTime() + millisecond);
    document.cookie = name + "="+ value + ";expires=" + exp.toGMTString();
  }

  getCookie(name){
    const reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    let value = document.cookie.match(reg);
    if(value !== null){
      try{
        return JSON.parse(value[2]);
      }catch(e) {
        console.log(e);
        return value[2] ;
      }
    }else {
      return null;
    }
  }

  delCookie(name){
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval = this.getCookie(name);
    if(cval!==null)
      document.cookie= name + "="+cval+";expires="+exp.toGMTString();
  }

  // str: 1s | 10h | 30d
  getMillisecond(str){
    let timeValue = str.substring(0,str.length-1) * 1;
    let timeUnit = str.substring(str.length, str.length-1);
    if (timeUnit === "s" ){
      return timeValue * 1000;
    }else if (timeUnit === "h"){
      return timeValue*60*60*1000;
    }else if (timeUnit === "d"){
      return timeValue*24*60*60*1000;
    }
  }
}

/**
 * 时间转换器,格式化   
 **/
class FormatTime {
  
  constructor(){
    this.nowTimestamp = new Date().getTime();
  }

  /* some time ago*/
  someTimeAgo = (time) => {
    let diff = this.nowTimestamp - new Date(time).getTime();
    if(!time) return false; 
    if(diff <= 60 * 1000 * 60 * 24 * 30 * 12 * 2){
      return moment(time).fromNow();  
    }else{
      return moment(time).format("YYYY-MM-DD HH:mm:ss");
    }
  }

  /**
   * type: "YYYY-MM-DD HH:mm:ss"
   */
  format = (time, type) => {
    return moment(time).format(type);
  }
}


const myTimeFormat = new FormatTime();
const myCookie = new Cookie();
export {
  myCookie,
  myTimeFormat
};