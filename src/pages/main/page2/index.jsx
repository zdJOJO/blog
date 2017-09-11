import React, { Component } from "react";
import { observer } from "mobx-react";
import { EditableText, Icon, Intent, Tab2, Tabs2, Button } from "@blueprintjs/core";
const ReactMarkdown = require('react-markdown');
import myPage2Store from './page2Store';
import './page2.scss';

const Page2 = () => {

  const Write = (
    <div className="left">
      <textarea 
        autoFocus="autofocus"
        className="pt-intent-primary pt-input pt-fill" 
        dir="auto" 
        placeholder="Edit content..."
        value={myPage2Store.articleCnt}
        onChange={(event)=>{myPage2Store.handleChange('content', event)}}
      />
    </div>
  );

  const Preview = (
    <div className="right">
      <ReactMarkdown escapeHtml source={myPage2Store.article || 'Nothing to preview'} />
    </div>
  );

  return(
    <div>
      <div className="article-title">
        <h3>
          <EditableText
            maxLength={200}
            placeholder="Edit title..."
            onChange={myPage2Store.handleChange}
          />
        </h3>
      </div>
      <div className="article-content">
        <div className="nav"></div>
        <Tabs2
          id="Tabs2Example"
          animate
          key="horizontal"
        >
          <Tab2 id="write" title="Write" panel={Write} />
          <Tab2 id="preview" title="Preview" panel={Preview} />
        </Tabs2>
      </div>
      <div className="buttons">
        <Button className="pt-minimal" iconName="tick" text="submit" intent={Intent.SUCCESS} 
          disabled={!myPage2Store.isAbleToSave}
        />
        <Button className="pt-minimal" iconName="cross" text="Clean" intent={Intent.DANGER}/>
        <Button className="pt-minimal" iconName="saved" text="save" intent={Intent.WARNING}
          disabled={!myPage2Store.isAbleToSave}
          onClick={myPage2Store.handleSave}
        />
      </div>
    </div>
  );
};

export default observer(Page2);
