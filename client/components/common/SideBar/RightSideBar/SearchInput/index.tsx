import React from 'react';
import { Wrrapper, Input } from './style';
import { BiSearchAlt2 } from 'react-icons/bi';

const SearchInput = () => {
  return (
    <Wrrapper>
      <BiSearchAlt2 size={15} />
      <Input placeholder="해쉬태그를 입력해주세요" />
    </Wrrapper>
  );
};

export default SearchInput;
