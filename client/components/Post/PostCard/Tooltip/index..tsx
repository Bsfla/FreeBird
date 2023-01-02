import React from 'react';
import { Wrapper } from './style';

interface Props {
  isOpenOption: boolean;
}

const Tooltip = ({ isOpenOption }: Props) => {
  return (
    <Wrapper>
      <div className="rect" />
      <div className="option">
        <span className="edit">수정</span>
        <span className="delete">삭제</span>
      </div>
    </Wrapper>
  );
};

export default Tooltip;
