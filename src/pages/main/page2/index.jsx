import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react";
import { EditableText, Icon, Intent, Button } from "@blueprintjs/core";
import myPage2Store from './page2Store';
import './page2.scss';

@observer
class Page2 extends Component{

  componentDidMount(){
    myPage2Store.initialEditor(this.refs["editor"][0]);
  }


  render(){
    return(
      <div>

        <div className="article-title">
          <h3>
            <EditableText
              maxLength={200}
              placeholder="Edit title..."
              value={myPage2Store.articleTitle}
              onChange={myPage2Store.handleTitle}
            />
          </h3>
        </div>

        <div className="article-content">
          <textarea ref="editor" />
        </div>

        <div className="buttons">
          <Button
            className="pt-minimal"
            iconName="tick"
            text="submit"
            intent={Intent.SUCCESS}
            onClick={()=>{myPage2Store.handleSubmit(this.props.history)}}
          />
          <Button
            className="pt-minimal"
            iconName="saved"
            text="save"
            intent={Intent.WARNING}
            onClick={myPage2Store.handleSave}
          />
        </div>

      </div>
    );
  }
}

// export default Page2;
export default withRouter(Page2);