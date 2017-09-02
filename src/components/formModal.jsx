/*
  表单主题 部分
*/

import React from "react";
import { observer } from "mobx-react";
import classNames from "classnames";
import { 
  Button, Overlay, Classes,
  Tooltip, Position,InputGroup
} from "@blueprintjs/core";
import "./css/transition.scss";

const FormModal = ({...props}) => {

  const classes = classNames(
    Classes.CARD,
    Classes.ELEVATION_4,
    props.transition || "myModal-transition"
  );

  const initalState = {
    autoFocus: props.autoFocus || true,
    canEscapeKeyClose: props.canEscapeKeyClose || true,
    canOutsideClickClose: props.canOutsideClickClose || true,
    enforceFocus: props.enforceFocus || true,
    hasBackdrop: props.hasBackdrop || false,
    inline: props.inline || false
  };

  const infoSign =(intent, text) => (
    <Tooltip
      content={text} 
      inline={true}
      intent={intent}
      position={Position.RIGHT}
    >
      <Button
        className={Classes.MINIMAL}
        intent={intent}
        iconName="info-sign"
        active={false}
      />
    </Tooltip>
  );

  return(
    <Overlay 
      isOpen={props.isOpen} 
      onClose={props.onClose}
      className={Classes.OVERLAY_SCROLL_CONTAINER}
      onKeyUp={(event)=>{props.onKeyUp(event)} }
      { ...initalState }
    >
      <div className={classes}>
        <Button className="close pt-minimal " iconName="cross" onClick={props.onClose}/>
        <div className="header">
          {props.head ||null}
        </div>
        <form
          onSubmit={(event)=>{
            event.preventDefault();
            props.onSubmit();
          }}
        >
          <div className="pt-dialog-body"> 
            {
              props.inputGroup.map( (ele, index)=>{
                return(
                  <InputGroup 
                    key={index} 
                    type={ele.type || "text"}
                    value={props.loginInfo.get(ele.property)}
                    intent={ele.intent}
                    className={ele.className || "pt-round pt-large"}
                    property={ele.property}
                    required={ele.required}
                    placeholder={ele.placeholder}
                    leftIconName={ele.leftIconName}
                    rightElement={ele.text ? infoSign(ele.intent, ele.text) : null} 
                    onChange={(event)=>{props.onChange(ele.property, event)}}
                    onBlur={()=>{ props.onBlur(ele.property, index)}}
                  />
                );
              })
            }
          </div>
          <div className="pt-dialog-footer">
            {
              props.buttons.map((button, index)=>{
                return(
                  <Button
                    key={index}
                    className="pt-minimal"
                    style={ index===1 ? {float: "right"} : null }
                    type={button.type || "button"}
                    intent={button.intent}
                    onClick={button.type==="submit" ? null : button.action}
                  >{button.label}</Button>
                );
              })
            }
          </div>
        </form>
      </div>
    </Overlay>
  );
};

export default observer(FormModal);