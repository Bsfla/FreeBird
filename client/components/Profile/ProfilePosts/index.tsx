import React from 'react';
import { PostList, PostEndBar, PostIntroBar, NotList } from '@components/index';
import { PostType, UserInfoType } from '@lib/types';
import { useInfiniteScroll } from '@hooks/common';
import { queryKeys } from '@consts/queryKeys';
import { getProfilePosts } from '@apis/profile';
import { useRouter } from 'next/router';

interface Props {
  profile: UserInfoType;
}

const ProfilePosts = ({ profile }: Props) => {
  const router = useRouter();
  const userId = Number(router.query.id);

  const { ref, resultData: posts } = useInfiniteScroll<PostType[]>(
    queryKeys.posts,
    getProfilePosts,
    userId
  );

  return (
    <>
      <PostIntroBar userName={profile.nickname} />
      {posts?.length ? <PostList posts={posts} endPost={ref} /> : <NotList />}
    </>
  );
};

export default ProfilePosts;
