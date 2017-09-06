import React from "react";
import { Position, Intent, Tag, Tooltip } from "@blueprintjs/core";
import MyIcon from '../components/myIcon';
import headPic from '../img/default.jpg';

const UserSlider = ({...props}) =>{
  return(
    <div className={props.isShowUserInfo ? "userSlider show" : "userSlider"}>
      <div className="head">
        <img src={headPic}/>
      </div>
      <p className="nickname">一代大神</p>
      <p className="occupation">华尔街金融巨鳄</p>
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
            content={<span>BRRAAAIINS</span>}
            inline={true}
            intent={Intent.PRIMARY}
            position={Position.BOTTOM}
          >12312@qwe.com</Tooltip>
        </li>
        <li>
          <MyIcon iconName="comment"/>
          <Tooltip
            className="pt-tooltip-indicator"
            content={<span>BRRAAAIINS</span>}
            inline={true}
            intent={Intent.PRIMARY}
            position={Position.BOTTOM}
          >12312@qwe.com</Tooltip>
        </li>
        <li>
          <MyIcon faIconName="github"/>
          <Tooltip
            className="pt-tooltip-indicator"
            content={<span>BRRAAAIINS</span>}
            inline={true}
            intent={Intent.PRIMARY}
            position={Position.BOTTOM}
          ><a>github</a></Tooltip>
        </li>
      </ul>
    </div>
  );
};

export default UserSlider;