export interface PostFormType {
  content: string;
}

export interface PostFormResponseType {
  success: boolean;
  message: string;
}

export interface PostType {
  Comments: [];
  Images: { src: string }[];
  Hashtags: HashTagType[];
  Likers: [];
  RetweetId: number;
  User: {
    id: number;
    nickname: string;
  };
  content: string;
  createdAt: string;
  updateAt: string;
  id: number;
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
