import React from "react";
import Dialog from "react-toolbox/lib/dialog";

const Modal = () =>{
  return(
    <Dialog
      actions={this.actions}
      active={this.state.active}
      onEscKeyDown={this.handleToggle}
      onOverlayClick={this.handleToggle}
      title='My awesome dialog'
    />
  );
};

export default Modal;