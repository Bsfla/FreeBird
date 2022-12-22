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
}

export type LoginFormType = Pick<UserFormType, 'email' | 'password'>;
