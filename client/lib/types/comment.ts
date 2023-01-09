export interface CommentFormType {
  postId: number;
  content: string;
}

export interface CommentType {
  id: number;
  createdAt: string;
  content: string;
  User: {
    id: number;
    nickname: string;
  };
}
