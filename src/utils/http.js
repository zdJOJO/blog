import {toast} from "../components/toast";
import {myCookie} from './';

const methods = ["get", "post", "put", "delete"]; 
const pulicPath = "/api";

/* 使用fetch  异步*/
const myFetch = (url, options)=> {
  return fetch(url, options)
    .then( res => {
      if(res.status===200){
        return res.json();
      }else if(res.status === 401){
        return res.json();
      }else {
        toast.error(`${res.status}, ${res.statusText}`);
        return Promise.reject(`${res.status}, ${res.statusText}`);
      }
    })
    .then( json => {
      return Promise.resolve(json);
    })
    .catch( e => {
      return Promise.reject(e);
    });
};

class ClientHttp {
  constructor(){

    this.options = {};

    methods.forEach( method => {
      this[method] = (url, _body, _customError=false) => new Promise((resolve, reject)=>{
        this.options = {
          method: method
          // credentials: "include"  //带上cookie
        };
        if(method !== "get"){
          this.options = {
            ...this.options,
            body: JSON.stringify(_body),
            headers: {
              "Content-Type": "application/json",
              "x-access-token": myCookie.getCookie("token") || ""
            }
          };
        }

        myFetch(`${pulicPath}${url}`, this.options)
          .then( json => {
            if(_customError){
              resolve(json);
            }else{
              if(json.status === -1){
                toast.error(json.msg);
                reject(json.msg);
              }else{
                resolve(json);
              }
            }
          })
          .catch( e => {
            console.log(e);
            reject(e);
          });

      });
    });
  }
};

const http = new ClientHttp();
export default http;
