export interface CommentFormType {
  postId: number;
  content: string;
}

export interface CommentType {
  id: number;
  createdAt: string;
  content: string;
  isReply: boolean;
  User: {
    id: number;
    nickname: string;
  };
  Reply?: CommentType[];
}
