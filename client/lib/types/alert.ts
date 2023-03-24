import { alertMessageType } from '@consts/alert';

export interface AlertType {
  isOpen: boolean;
  message: alertMessageType | '';
}
