import { getHashtag } from '@apis/hashtag';
import Link from 'next/link';
import React from 'react';
import { useQuery } from 'react-query';
import { SEARCH_PAGE } from '@consts/route';
import { Wrrapper, HashtagContainer, Hashtag } from './style';

const HashtagRank = () => {
  const { data: hashtags } = useQuery('hashtag', () => getHashtag());
  console.log(hashtags);

  return (
    <Wrrapper>
      <div className="title">
        <span>#인기순위</span>
      </div>
      <HashtagContainer>
        <Hashtag>{`1. #${hashtags && hashtags[0]?.Hashtag.name}`}</Hashtag>
        <Hashtag>{`2. #${hashtags && hashtags[1]?.Hashtag.name}`}</Hashtag>
        <Hashtag>{`3. #${hashtags && hashtags[2]?.Hashtag.name}`}</Hashtag>
      </HashtagContainer>
    </Wrrapper>
  );
};

export default HashtagRank;
