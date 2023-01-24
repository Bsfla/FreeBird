import React from 'react';
import { Wrrapper } from './style';

interface Props {
  userName: string;
}

const PostIntroBar = ({ userName }: Props) => {
  return (
    <Wrrapper>
      <span>
        <span className="user_name">{`#${userName}`}</span>의 게시물
      </span>
    </Wrrapper>
  );
};

export default PostIntroBar;
