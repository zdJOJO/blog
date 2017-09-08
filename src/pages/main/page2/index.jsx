import React, { Component } from "react";
import { EditableText, Icon, Intent, Tab, TabList, TabPanel, Tabs } from "@blueprintjs/core";
const ReactMarkdown = require('react-markdown');

const input = '# This is a header\n\n ` And this is a paragraph ` ';

const Page2 = () => (
  <div className="testColor">
    <div>
      <div className="article-title">
        <h3>
          <EditableText
            maxLength={200}
            placeholder="Edit title..."
          />
        </h3>
      </div>
      <div className="article-content">
        <div className="nav"></div>
        <Tabs>
          <TabList>
            <Tab>Write</Tab>
            <Tab>Preview</Tab>
          </TabList>
          <TabPanel>
            <div className="left">
              <textarea 
                className="pt-intent-primary pt-input pt-fill" 
                dir="auto" 
                placeholder="Edit content..."
                defaultValue="231231231212213"
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="right">
              <ReactMarkdown escapeHtml source={input} />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  </div>
);

export default Page2;
