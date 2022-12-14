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
