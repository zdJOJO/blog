import {observable, action, computed} from "mobx";
import http from "../../../utils/http";

class ArticleStore {

  /* article 列表*/
  @observable articleList = [];

  /* article 详情*/
  @observable articleDetail = {
    title: "",
    subtitle: "",
    content: "",
    pubTime: "",
    updateTime: "", 
    tag: [],
    comments: [], 
    author: ""  
  };

  /* 获取文章列表  */
  @action getList =()=>{
    http.get("/article/list")
      .then( json => {
        this.articleList = json.result.data;
      });
  };

  /* 获取文章列表  */
  @action getDetail =(id)=>{
    http.get(`/article/${id}`)
      .then( json => {
        this.articleDetail = json.result;
      });
  }
}

const store = new ArticleStore();
export default store;