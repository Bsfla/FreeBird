export interface UserFormType {
  nickname: string;
  email: string;
  password: string;
  passwordconfirm: string;
}

export type LoginFormType = Pick<UserFormType, 'email' | 'password'>;
