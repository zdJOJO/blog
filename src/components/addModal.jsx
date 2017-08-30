import React from "react";
import {observer} from "mobx-react";

import Button from "react-toolbox/lib/button";
import theme from "./css/button.scss";

const AddModal = observer((props) => {
  return(
    <form 
      onSubmit={(event)=>{
        event.preventDefault();
        props.handleSubmit();
      }}
    >
      <ul>
        {
          props.columns.map((ele, index)=>{
            return(
              <li key={index}>
                <span>{ele.infoStr}: </span>
                <input
                  type={ele.type} 
                  value={props.addMap.get(ele.infoStr) || ""}
                  onChange={(event)=>{props.handleChange(ele.infoStr, event)}}
                  required
                />
              </li>
            );
          })
        }
      </ul>
      <Button type="submit" label="确定" flat></Button>
    </form>
  );
});

export default AddModal;