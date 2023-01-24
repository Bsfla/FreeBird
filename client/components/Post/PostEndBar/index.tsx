import { Wrrapper } from './style';
import React from 'react';
import { BsArrowDownSquare } from 'react-icons/bs';
import theme from 'styles/theme';

interface Props {
  endPost: (node?: Element | null | undefined) => void;
}

const PostEndBar = ({ endPost }: Props) => {
  return (
    <Wrrapper ref={endPost}>
      <BsArrowDownSquare color={theme.colors.sub3} size={30} />
      <span>더이상의 게시물이 없습니다</span>
    </Wrrapper>
  );
};

export default PostEndBar;
