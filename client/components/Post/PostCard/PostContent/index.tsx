import React from 'react';
import { PostType } from '@lib/index';
import { Wrapper, HashTag } from './style';

interface Props {
  post: PostType;
}

const PostContent = ({ post }: Props) => {
  return (
    <Wrapper>
      {post.content.split(/(#[^\s#]+)/g).map((v: string, index: number) => {
        if (!v.match(/(#[^\s#]+)/)) {
          return <span key={index}>{v}</span>;
        }
      })}
      <HashTag>
        {post.Hashtags?.map((el) => (
          <span key={el.name}>#{el.name}</span>
        ))}
      </HashTag>
    </Wrapper>
  );
};

export default PostContent;
