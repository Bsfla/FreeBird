export interface UserFormType {
  nickname: string;
  email: string;
  password: string;
  passwordconfirm: string;
}
export type ProfileImageType = { src: string } | null;

export interface UserInfoType {
  id: number;
  nickname: string;
  email: string;
  intro: string;
  ProfileImage: ProfileImageType;
  Followings: { id: number }[];
  Followers: { id: number }[];
}

export interface UserProfileEditType {
  formData: FormData;
  userId: number;
}

export type LoginFormType = Pick<UserFormType, 'email' | 'password'>;
