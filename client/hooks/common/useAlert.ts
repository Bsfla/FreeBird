import { useRecoilState, useRecoilValue } from 'recoil';
import { alertState } from '@recoil/alert/atom';
import { alertMessageType } from '@consts/alert';

const useAlert = () => {
  const [alert, setAlert] = useRecoilState(alertState);

  const showAlert = (alertMessage: alertMessageType) => {
    setAlert({
      isOpen: true,
      message: alertMessage,
    });
  };

  const hideAlert = () => {
    setAlert({
      isOpen: false,
      message: '',
    });
  };

  const { isOpen, message } = alert;

  return { isOpen, message, showAlert, hideAlert };
};

export default useAlert;
