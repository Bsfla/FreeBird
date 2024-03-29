import { ModalListType } from '@lib/types';
import { modalName } from '@consts/modal';
import { atom } from 'recoil';

export const modalAtomState = atom({
  key: 'modal',
  default: false,
});

export const modalListState = atom<ModalListType>({
  key: 'modalList',
  default: [
    {
      name: modalName.POST_IMAGE,
      isShow: false,
      images: [],
    },
    {
      name: modalName.PROFILE_EDIT,
      isShow: false,
    },
    {
      name: modalName.CONFIRM_REMOVE,
      isShow: false,
    },
  ],
});
