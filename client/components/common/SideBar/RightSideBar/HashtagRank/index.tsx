import { getHashtag } from '@apis/hashtag';
import Link from 'next/link';
import React from 'react';
import { useQuery } from 'react-query';
import { SEARCH_PAGE } from '@consts/route';
import { Wrrapper, HashtagContainer, Hashtag } from './style';

const HashtagRank = () => {
  const { data: hashtags } = useQuery('hashtag', () => getHashtag());

  return (
    <Wrrapper>
      <div className="title">
        <span>#인기순위</span>
      </div>
      <HashtagContainer>
        <Hashtag>#안녕</Hashtag>
        <Hashtag>#안녕</Hashtag>
        <Hashtag>#안녕</Hashtag>
      </HashtagContainer>
    </Wrrapper>
  );
};

export default HashtagRank;
