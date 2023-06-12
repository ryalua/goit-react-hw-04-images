import React, { Component } from 'react';
import { ModalOverlay } from './ModalStyled';

export class Modal extends Component {
  render() {
    return (
      <ModalOverlay>
        <div className="modal">{this.props.children}</div>
      </ModalOverlay>
    );
  }
}

export default Modal;
