import { ModalOverlay } from './ModalStyled';

import React from 'react';

export function Modal({ children }) {
  return (
    <div>
      return (
      <ModalOverlay>
        <div className="modal">{children}</div>
      </ModalOverlay>
      );
    </div>
  );
}
