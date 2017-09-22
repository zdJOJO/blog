import {toast} from "../components/toast";

const myFetch = (url, methodType="get", obj={}, customError=false) => {
  return new Promise( (resolve, reject) => {
    let options = methodType==="get" 
      ? { credentials: "include" } 
      : {
        method: methodType,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj),
        credentials: "include"
      };

    fetch(`/api${url}`, options)
      .then( res =>{
        if(res.ok && res.status===200){
          return res.json();
        }else if(res.status === 401){
          this.toast.warning("login timeout, please login again !", 5000, {
            text: "Login",
            onClick: ()=>{
              console.log(1111);
            }
          });
        }else{
          throw new Error(`${res.status}, ${res.statusText}`);
        }
      })
      .then( json =>{
        if(!customError){
          if(json.status === 0){
            resolve(json);
          }else{
            this.toast.error(json.msg, 5000);
          }
        }else{
          resolve(json);
        }
      })
      .catch( e =>{
        reject(e);
        toast.error(e);
      });
  });
};

export default myFetch;