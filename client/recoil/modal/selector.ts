import { ModalName, ModalType } from '@lib/types';
import { selectorFamily } from 'recoil';
import { modalListState } from './atom';

export const modalState = selectorFamily<ModalType, ModalName>({
  key: 'modalSelector',
  get:
    (name: ModalName) =>
    ({ get }) =>
      get(modalListState).filter((modal) => modal.name === name)[0],
});
