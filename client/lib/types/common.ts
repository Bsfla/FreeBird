import { ReactNode } from 'react';

export interface FetchingDataType {
  id: number;
}

export interface ModalProps {
  isOpen: boolean;
  children: ReactNode | string;
}
