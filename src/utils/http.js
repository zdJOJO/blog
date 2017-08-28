const myFetch = (url, methodType="get", obj={}) => {
  return new Promise( (resolve, reject) => {
    let header = methodType==="get" 
      ? null 
      : {
        method: methodType,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj),
        credentials: "include"
      };

    fetch(url, header)
      .then( res =>{
        if(res.ok && res.status===200){
          return res.json();
        }else if(res.status === 401){
          alert("登录超时");
        }else{
          throw new Error(`${res.status}, ${res.statusText}`);
        }
      })
      .then( json =>{
        resolve(json);
      })
      .catch( e =>{
        console.log(e);
        reject(e);
      });
  });
};

export default myFetch;