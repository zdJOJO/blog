import {observable, action, computed} from "mobx";
import http from "../../../utils/http";
import SimpleMDE  from 'simplemde';
import editorConfig from "../../../utils/editorConfig";
import {toast} from "../../../components/toast";

class Page2Store {

  simplemde;

  // 文章标题
  @observable articleTitle = '';

  // 文章内容
  @observable articleCnt = '';

  @action handleTitle = (value) => {
    this.articleTitle = value ;
  };

  //保存文章
  handleSave=()=>{
    window.localStorage.setItem(`article`, this.simplemde.value());
    toast.success('save successfully !');
  };

  // 提交文章
  @action handleSubmit=(history)=>{
    let text = this.simplemde.value();
    if(!this.articleTitle){
      toast.error('please fill in the article title !');
      return false;
    }
    if(!text){
      toast.error('please fill in the content !');
      return false;
    }

    let obj = {
      title: this.articleTitle,
      subtitle: "",
      content: this.simplemde.markdown(text),
      pubTime: new Date(),
      updateTime: "", 
      tag: [],
      comments: [],
      author: ""
    };

    http.post(`/article/create`, obj, true)
      .then( json => {
        if(json.status === -1){
          toast.error(json.msg, 10000, {
            iconName: "right",
            text: "login",
            onClick: ()=>{
              history.push("/");
            }
          });
        }else{
          this.initialArticle();
          toast.success(json.msg);
        }
      });
  };


  //是否可以 提交|保存 文章
  @computed get isAbleToSave (){
    return this.articleTitle.trim() && this.articleCnt.trim();
  }

  //获取全文内容
  @computed get article(){
    let value = this.articleTitle ? `# ${this.articleTitle} \n` : '';
    return value + this.articleCnt ;
  }

  //初始化 文章
  initialArticle=()=>{
    window.localStorage.setItem("article", "");
    this.handleTitle('');
    this.simplemde.value("");
  };

  //初始化 editor
  initialEditor=(dom)=>{
    this.simplemde = new SimpleMDE({
      ...editorConfig,
      element: dom,
      initialValue: window.localStorage.getItem(`article`) || ''
    });
  };

}

const myPage2Store = new Page2Store();
export default myPage2Store;