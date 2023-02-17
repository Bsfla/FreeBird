import { ProfileImageType } from './user';

export interface PostFormResponseType {
  success: boolean;
  message: string;
}

export interface PostType {
  Comments?: [];
  Images: { src: string }[];
  Hashtags: HashTagType[];
  Likers: { id: number }[];
  Retweet?: PostType;
  Retweets: PostType[];
  RetweetId: number;
  User: {
    id: number;
    nickname: string;
    ProfileImage: ProfileImageType;
  };
  content: string;
  createdAt: string;
  updateAt: string;
  id: number;
}

export interface PostEditType {
  postId: number;
  data: FormData;
}

export interface HashTagType {
  name: string;
  PostHashtag: {
    HashtagId: number;
    PostId: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface InfiniteFetchingType {
  lastId?: number;
  paramId?: number | string;
}

export interface SearchPostsFetchingType extends InfiniteFetchingType {
  hashtag: string
}
