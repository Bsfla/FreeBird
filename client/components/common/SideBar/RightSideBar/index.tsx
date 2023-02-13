import React from 'react';
import { Wrrapper } from './style';
import SearchInput from './SearchInput';
import HashtagRank from './HashtagRank';

const RightSideBar = () => {
  return (
    <Wrrapper>
      <SearchInput />
      <HashtagRank />
    </Wrrapper>
  );
};

export default RightSideBar;
