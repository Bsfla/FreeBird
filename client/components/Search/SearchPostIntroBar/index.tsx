import React from 'react';
import { Wrrapper } from './style';

interface Props {
  hashtag: string;
}

const SearchPostIntroBar = ({ hashtag }: Props) => {
  return (
    <Wrrapper>
      <span>
        <span className="user_name">{`#${hashtag}`}</span> 검색 결과
      </span>
    </Wrrapper>
  );
};

export default SearchPostIntroBar;
