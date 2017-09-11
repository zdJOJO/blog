import {observable, action, computed} from "mobx";
import myFetch from "../../../utils/http";
import {toast} from "../../../components/toast";

class Page2Store {

  myStorage = window.localStorage;

  // 文章标题
  @observable articleTitle = '';

  // 文章内容
  @observable articleCnt = '';

  @action handleChange = (value, event) => {
    if(event){
      this.articleCnt = event.target.value;
    }else{
      this.articleTitle = value ;
    }
    
  };

  @action handleSave=()=>{
    const article = {
      title: this.articleTitle,
      content: this.articleCnt
    };
    this.myStorage.setItem("article", JSON.stringify(article));
    toast.success('Save success !');
  };

  //是否可以 提交|保存 文章
  @computed get isAbleToSave (){
    return this.articleTitle.trim() && this.articleCnt.trim();
  }

  @computed get article(){
    let value = this.articleTitle ? `# ${this.articleTitle} \n` : '';
    return value + this.articleCnt ;
  }

  //是否有文章保存
  @computed get hasArticle (){
    return this.myStorage.getItem("article");
  }
 
}

const myPage2Store = new Page2Store();
export default myPage2Store;