import api from '@apis/base';
import {
  InfiniteFetchingType,
  PostType,
  UserInfoType,
  UserProfileEditType,
} from '@lib/types';

export const getProfile = (userId: number): Promise<UserInfoType> => {
  return api.get({
    url: `/profile/${userId}`,
  });
};

export const editProfile = (body: UserProfileEditType) => {
  const { formData, userId } = body;

  return api.patch({
    url: `/profile/${userId}`,
    data: formData,
  });
};

export const getProfilePosts = (
  body: InfiniteFetchingType
): Promise<PostType[]> => {
  const { lastId, paramId } = body;

  console.log(paramId);

  return api.get({
    url: `/profile/posts/${paramId}`,
    params: {
      lastId,
    },
  });
};
