import React, {Component} from "react";
import { observer } from "mobx-react";
import { Route, Link } from "react-router-dom";
// import { EditableText, Icon, Intent, Button } from "@blueprintjs/core";
import { createComponent } from "../../../routes/routes";
import store from './store';
import './article';

@observer
class Article extends Component{

  componentDidMount(){
    store.getList();
  }

  render(){
    return(
      <div> 
        <ul className="articleList">
          {
            store.articleList.map((article, index)=>{
              return(
                <Link to={`/main/article/${article._id}`} key={article._id}>
                  <div className="articleItem"> 
                    <h1>{article.title}</h1>
                  </div>
                </Link>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Article;
