/*
  表单主题 部分
*/

import React from "react";
import { observer } from "mobx-react";
import classNames from "classnames";
import { 
  Button, Overlay, Intent, Classes, 
  Tooltip, Position,InputGroup, Icon 
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
      position={Position.RIGHT_BOTTOM}
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
        <form
          onSubmit={(event)=>{event.preventDefault()}}
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
                    onBlur={()=>{ props.onBlur(ele.property, index) || null }}
                  />
                );
              })
            }
          </div>
          <div className="pt-dialog-footer">
            <Button className="pt-minimal" 
              intent={Intent.SUCCESS} 
              type="submit"
            >GO</Button>
            <Button className="pt-minimal" intent={Intent.DANGER}
              style={{float: "right"}} 
              onClick={props.onClose}
            >Cancle</Button>
          </div>
        </form>
      </div>
    </Overlay>
  );
};

export default observer(FormModal);