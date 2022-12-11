import styled from 'styled-components';

export const StyledImage = styled.div`
  width: 120px;
  height: 160px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  svg {
    position: absolute;
    right: 0;
    cursor: pointer;
  }
`;
