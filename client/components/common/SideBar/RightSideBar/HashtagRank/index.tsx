import Link from 'next/link';
import React from 'react';
import { Wrrapper, HashtagContainer, Hashtag } from './style';

const HashtagRank = () => {
  return (
    <Wrrapper>
      <div className="title">
        <span>#인기순위</span>
      </div>
      <HashtagContainer>
        <Link href="/login">
          <Hashtag>
            1.<span>#테스트</span>
          </Hashtag>
        </Link>
        <Link href="/login">
          <Hashtag>
            2.<span>#테스트</span>
          </Hashtag>
        </Link>
        <Link href="/login">
          <Hashtag>
            3.<span>#테스트</span>
          </Hashtag>
        </Link>
      </HashtagContainer>
    </Wrrapper>
  );
};

export default HashtagRank;
