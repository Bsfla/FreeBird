export interface UserFormType {
  nickname: string;
  email: string;
  password: string;
  passwordconfirm: string;
}

export interface UserInfoType {
  id: number;
  nickname: string;
  email: string;
  intro: string;
}

export interface UserProfileEditType {
  formData: FormData;
  userId: number;
}

export type LoginFormType = Pick<UserFormType, 'email' | 'password'>;
