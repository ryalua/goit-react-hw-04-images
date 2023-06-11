import styled from '@emotion/styled';

export const Gallery = styled.ul`
  // display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 20px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
