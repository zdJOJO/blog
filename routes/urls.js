/*
*  定义路由的 url
* */

module.exports = (function Urls(PUBLIC) {

  this.PUBLIC = PUBLIC;
  
  return Object.freeze({

    /* 学生*/
    GET_STUDENT: `${this.PUBLIC}/school/student`,
    ADD_STUDENT: `${this.PUBLIC}/school/student/add`,

    /* 登录注册*/ 
    SIGN_UP: `${this.PUBLIC}/signup`,
    LOGIN: `${this.PUBLIC}/login`,

    /* 文章*/
    ARTICLE_CREATE: `${this.PUBLIC}/article/create`,
    ARTICLE_UPDATE: `${this.PUBLIC}/article/update`,
    ARTICLE_GET_LIST: `${this.PUBLIC}/article/list`,
    ARTICLE_GET_DETAIL: `${this.PUBLIC}/article/:id`

  });

})("/api");