import moment from 'moment';

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
export { myTimeFormat };