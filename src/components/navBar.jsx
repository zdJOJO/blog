import React from "react";
import { Link } from "react-router-dom";
import { 
  Button, Switch, Position, Icon,
  Popover, PopoverInteractionKind, Menu, MenuDivider, MenuItem
} from "@blueprintjs/core";


const PopOverContent = ({...props}) => (
  <Menu>
    <MenuDivider title="User" />
    <MenuItem iconName="cog" text="setting" label={<Icon iconName="chevron-right"/>} 
      onClick={props.onClick}
    />
    <MenuDivider title="Text" />
    <MenuItem iconName="align-left" text="Alignment">
      <MenuItem iconName="align-left" text="Left" />
      <MenuItem iconName="align-center" text="Center" />
      <MenuItem iconName="align-right" text="Right" />
      <MenuItem iconName="align-justify" text="Justify" />
    </MenuItem>
    <MenuItem iconName="style" text="Style">
      <MenuItem iconName="bold" text="Bold" />
      <MenuItem iconName="italic" text="Italic" />
      <MenuItem iconName="underline" text="Underline" />
    </MenuItem>
  </Menu>
);

const NavBar = ({...props}) => (
  <nav 
    style={props.style}
    className={`pt-navbar .modifier ${props.isChooseTheme ? "pt-dark" : ""}`}
  >
    <div className="pt-navbar-group pt-align-right">
      {
        props.links.map((ele, index)=>{
          return (
            <Link key={index} to={ele.href}>
              <button className={`pt-button pt-minimal pt-icon-${ele.icon}`}>
                {ele.label}
              </button>
            </Link>
          );
        })
      }
      <span className="pt-navbar-divider" />
      <Switch 
        checked={props.isChooseTheme} 
        onChange={props.handleChangeTheme} 
        label="Theme" 
        inline
      />
      <Popover 
        target={props.target ||  (<Button className="pt-minimal" iconName="user"/>)}
        content={props.content || (<PopOverContent onClick={props.showUserInfo}/>)}
        interactionKind={PopoverInteractionKind.CLICK}
        position={Position.BOTTOM_RIGHT}
        popoverClassName="pt-popover-content-sizing"
      />
    </div>
    <div className="pt-navbar-group pt-align-right" style={{marginRight: "20px"}}>
      <div className="pt-navbar-heading">Search</div>
      <input className="pt-input" placeholder="Search files..." type="text" />
    </div>
  </nav>
);

export default NavBar;