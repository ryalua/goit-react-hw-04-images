import { LoadMoreBtn } from './ButtonStyled';

import React from 'react';

export default function Button({ onCount }) {
  return (
    <LoadMoreBtn type="button" onClick={onCount}>
      Load more
    </LoadMoreBtn>
  );
}
