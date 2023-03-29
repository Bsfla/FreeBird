import { useMutation, useQueryClient } from 'react-query';
import { editProfile } from '@apis/profile';
import { queryKeys } from '@consts/queryKeys';
import { useSetRecoilState } from 'recoil';
import { modalAtomState } from '@recoil/modal/atom';
import { useAlert } from '@hooks/common';
import { ALERT_MESSAGE } from '@consts/alert';

const useEditProfile = () => {
  const queryClient = useQueryClient();
  const setModalAtomState = useSetRecoilState(modalAtomState);
  const { showAlert } = useAlert();

  const { mutate } = useMutation(editProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.profile);
      queryClient.invalidateQueries(queryKeys.user);
      queryClient.invalidateQueries(queryKeys.posts);
      showAlert(ALERT_MESSAGE.PROFILE_EDIT);
      setModalAtomState(false);
    },
    onError: (error) => {
      alert(error);
    },
  });

  return { mutate };
};

export default useEditProfile;
