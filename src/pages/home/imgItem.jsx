import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class ImgItem extends Component{

  state = {
    loaded : false
  }

  componentDidMount(){
    const img = new Image();
    img.src = this.props.imgUrl;
    img.onload = ()=> {
      this.setState({loaded: true});
    };
  }

  defaultImgItem() {
    return(
      <div className="bubblingG">
        <span id="bubblingG_1">
        </span>
        <span id="bubblingG_2">
        </span>
        <span id="bubblingG_3">
        </span>
      </div>
    );
  } 

  render(){
    const {store, imgUrl, index} = this.props;
    const style = this.state.loaded 
      ? 
      {
        background: `url(${imgUrl}) no-repeat`,
        transition: index===store.imgIndex ? "opacity 1s cubic-bezier(0,0,1,0.47)" : null,
        opacity: index===store.imgIndex ? 1 : 0
      }
      : 
      {
        backgroundColor: "rgba(44, 58, 69, 0.1)",
        opacity: 1,
        minWidth: "auto"
      };
    return(
      <div
        className="imgItem"
        style={style}
      >
        {!this.state.loaded && this.defaultImgItem()}
      </div>
    );
  }

}

export default ImgItem;