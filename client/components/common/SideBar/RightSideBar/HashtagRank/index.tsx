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
      {hashtags && (
        <HashtagContainer>
          <Link href={`${SEARCH_PAGE}/${hashtags[0].Hashtag.name}`}>
            <Hashtag>
              1.<span>#{hashtags[0].Hashtag.name}</span>
            </Hashtag>
          </Link>
          <Link href={`${SEARCH_PAGE}/${hashtags[1].Hashtag.name}`}>
            <Hashtag>
              2.<span>#{hashtags[1].Hashtag.name}</span>
            </Hashtag>
          </Link>
          <Link href={`${SEARCH_PAGE}/${hashtags[2].Hashtag.name}`}>
            <Hashtag>
              3.<span>#{hashtags[2].Hashtag.name}</span>
            </Hashtag>
          </Link>
        </HashtagContainer>
      )}
    </Wrrapper>
  );
};

export default HashtagRank;
