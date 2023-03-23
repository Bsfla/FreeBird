export const LOGIN_PAGE = '/login';
export const SIGNUP_PAGE = '/signup';
export const MAIN_PAGE = '/';
export const POST_PAGE = '/post';
export const PROFILE_PAGE = '/profile';
export const FOLLOW_PAGE = '/follow';
export const SEARCH_PAGE = `/search`;
export const FOLLOWING_PAGE = (id: number) =>
  `/follow/${id}/following` as const;
export const FOLLOWER_PAGE = (id: number) => `/follow/${id}/follower` as const;
export const FREIND_RECOMMEND_PAGE = `/findfriend`;
