import React from "react";
import Button from "react-toolbox/lib/button";
import {Link} from "react-router-dom";

export class LinkButton extends React.Component {
  render() {
    const {href, ...otherProps} = this.props;

    if (href === undefined) {
      return <Button {...otherProps} />;
    }

    return (
      <Button {...otherProps}/>
    );
  }
};

export default LinkButton;