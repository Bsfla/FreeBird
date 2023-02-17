import { modalName } from '@consts/index';

export type ModalListType = ModalType[];

export interface ModalType {
  name: ModalName;
  isShow: boolean;
  images?: {
    src: string;
  }[];
}

export type ModalName = typeof modalName[keyof typeof modalName];
