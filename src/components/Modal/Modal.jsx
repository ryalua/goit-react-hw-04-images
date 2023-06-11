import React, { Component } from 'react';
import { ModalOverlay } from './ModalStiled';

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
