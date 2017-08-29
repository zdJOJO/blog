import React from "react";
// import Button from "react-toolbox/lib/button/Button";
import Button from "react-toolbox/lib/button";
import {Link} from "react-router-dom";
import theme from "./css/button.scss";

export class LinkButton extends React.Component {
  render() {
    const {href, ...otherProps} = this.props;

    if (href === undefined) {
      return <Button {...otherProps} />;
    }

    return (
      <Link to={href}>
        <Button {...otherProps} theme={theme}/>
      </Link>
    );
  }
};

export default LinkButton;