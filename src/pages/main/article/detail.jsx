import React, {Component} from "react";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
// import { EditableText, Icon, Intent, Button } from "@blueprintjs/core";
import './article.scss';
import store from './store';

@observer
class ArticleDetail extends Component{

  componentDidMount(){
    store.getDetail(this.props.match.params.id);
  }

  render(){
    return(
      <div className="articleDetail"> 
        <h1>{store.articleDetail.title}</h1>
        <div dangerouslySetInnerHTML={{__html: store.articleDetail.content}} />
      </div>
    );
  }
}

export default withRouter(ArticleDetail);
