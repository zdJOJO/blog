import React from "react";
import { Position, Intent, Tag, Tooltip } from "@blueprintjs/core";
import MyIcon from '../components/myIcon';

const UserSlider = ({...props}) =>{
  let imgUrl = process.env.NODE_ENV === "production" ? "/img/default.jpg" : `/static/img/default.jpg`;
  return(
    <div className={props.isShowUserInfo ? "userSlider show" : "userSlider"}>
      <div className="head">
        <img src={imgUrl}/>
      </div>
      <p className="nickname">{props.userInfo.nickname || "set your nickname"}</p>
      <p className="occupation">{props.userInfo.des || "set your individuality signature"}</p>
      <div className="tagList">
        <Tag className="pt-active .modifier" intent={Intent.PRIMARY} >大神</Tag>
        <Tag className="pt-active .modifier" intent={Intent.PRIMARY} >大神大神</Tag>
        <Tag className="pt-active .modifier" intent={Intent.PRIMARY} >大</Tag>
        <Tag className="pt-active .modifier" intent={Intent.PRIMARY} >大神大神</Tag>
        <Tag className="pt-active .modifier" intent={Intent.PRIMARY} >大神</Tag>
        <Tag className="pt-active .modifier" intent={Intent.PRIMARY} >大神大神大神</Tag>
      </div>
      <ul>
        <li>
          <MyIcon faIconName="envelope-o"/>
          <Tooltip
            className="pt-tooltip-indicator"
            content={<span>{props.userInfo.email || "set your email"}</span>}
            inline={true}
            intent={Intent.PRIMARY}
            position={Position.BOTTOM}
          >{props.userInfo.email || "set your email address"}</Tooltip>
        </li>
        <li>
          <MyIcon faIconName="facebook-square"/>
          <Tooltip
            className="pt-tooltip-indicator"
            content={<span>{props.userInfo.github || "set your facebook address"}</span>}
            inline={true}
            intent={Intent.PRIMARY}
            position={Position.BOTTOM}
          >
            <a href={props.userInfo.github || "set your facebook address"} target="_blank">
              {props.userInfo.github || "set your facebook address"}
            </a>
          </Tooltip>
        </li>
        <li>
          <MyIcon faIconName="github"/>
          <Tooltip
            className="pt-tooltip-indicator"
            content={<span>{props.userInfo.github || "set your github address"}</span>}
            inline={true}
            intent={Intent.PRIMARY}
            position={Position.BOTTOM}
          >
            <a href={props.userInfo.github || "set your github address"} target="_blank">
              {props.userInfo.github || "set your github address"}
            </a>
          </Tooltip>
        </li>
      </ul>
    </div>
  );
};

export default UserSlider;