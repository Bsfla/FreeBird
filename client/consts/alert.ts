export const ALERT_MESSAGE = {
  POST_EDIT: '게시글이 수정되었습니다.',
  POST_DELETE: '게시글을 삭제했습니다.',
  POST_CREATE: '게시글을 생성했습니다.',
  COMMENT_CREATE: '댓글을 생성했습니다',
  COMMENT_DELETE: '댓글을 삭제했습니다.',
  COMMENT_EDIT: '댓글을 수정했습니다',
  FOLLOWING_SUCCESS: '팔로잉 했습니다.',
  FOLLOWING_DELETE: '팔로잉을 삭제했습니다',
  FOLLOWER_DELETE: '팔로워를 삭제했습니다',
} as const;

export type alertMessageType = typeof ALERT_MESSAGE[keyof typeof ALERT_MESSAGE];
