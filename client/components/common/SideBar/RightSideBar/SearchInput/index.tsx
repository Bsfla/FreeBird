import React, { useState } from 'react';
import { Wrrapper, Input } from './style';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { SEARCH_PAGE } from '@consts/route';

const SearchInput = () => {
  const [value, setValue] = useState('');
  const router = useRouter();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSearchHashtag = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`${SEARCH_PAGE}/${value}`);
  };

  return (
    <Wrrapper onSubmit={handleSearchHashtag}>
      <BiSearchAlt2 size={15} />
      <Input
        placeholder="해쉬태그를 입력해주세요"
        onChange={handleChangeInput}
        value={value}
      />
    </Wrrapper>
  );
};

export default SearchInput;
