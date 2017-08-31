import React from "react";
import {observer} from "mobx-react";

const AddModal = (props) => {
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
      <button type="submit">确定</button>
    </form>
  );
};

export default observer(AddModal);