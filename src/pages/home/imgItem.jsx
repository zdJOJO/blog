import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class ImgItem extends Component{

  state = {
    loaded : false,
    imgUrl: process.env.NODE_ENV === "production" ? this.props.img.path : `/static${this.props.img.path}`
  };

  componentDidMount(){
    const newImg = new Image();
    newImg.src = this.state.imgUrl;
    newImg.onload = ()=> {
      this.setState({loaded: true});
      this.props.store.imgLoaded(this.props.index);
    };
  }

  render(){
    const { store, img, index } = this.props;
    return(
      <div
        className="imgItem"
        style={{
          ...img.style,
          opacity: (this.state.loaded && store.imgIndex === index) ? 1 : 0 ,
          background: `url(${this.state.imgUrl})`
        }}
      />
    );
  }

}

export default ImgItem;