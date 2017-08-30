
import React from "react";
import {Card, CardTitle, CardText} from "react-toolbox/lib/card";
import theme from "./theme.scss";

const TestTheme = () => (
  <Card>
    <CardTitle
      className={theme.themedSelf}
      title="Normal title"
      subtitle="I should look pink"
      theme={theme}
    />
    <CardText theme={theme}>Some text</CardText>
  </Card>
);

export default TestTheme;