import { atom } from 'recoil';
import { UserInfoType } from '@lib/types';

export const userAtomState = atom<Partial<UserInfoType>>({
  key: 'account',
  default: {},
});
