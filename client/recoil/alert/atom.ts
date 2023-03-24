import { atom } from 'recoil';
import { AlertType } from '@lib/types';

export const alertState = atom<AlertType>({
  key: 'alert',
  default: {
    isOpen: false,
    message: '',
  },
});
