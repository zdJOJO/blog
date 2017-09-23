import React, {Component} from "react";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { createComponent } from "../../../routes/routes";
import store from './store';
import {myTimeFormat} from '../../../utils';
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
                <section 
                  className="articleItem" 
                  key={article._id} 
                  onClick={()=>{
                    this.props.history.push(`/main/article/${article._id}`);
                  }}
                > 
                  <div className="sunmmary">
                    <h2>{article.title}</h2>
                    <div className="author">
                      <span>{article.title}</span>
                      <span>{article.author.nickname}</span><br/>
                      <span>
                        {myTimeFormat.someTimeAgo(article.pubTime)}<br/>
                      </span>
                    </div>
                    <p className="content"></p>
                  </div>
                  <div className="tag">

                  </div>
                </section>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(Article);
