import { useMutation, useQueryClient } from 'react-query';
import { editProfile } from '@apis/profile';
import { queryKeys } from '@consts/queryKeys';
import { useSetRecoilState } from 'recoil';
import { modalAtomState } from '@recoil/modal/atom';

const useEditProfile = () => {
  const queryClient = useQueryClient();
  const setModalAtomState = useSetRecoilState(modalAtomState);

  const { mutate } = useMutation(editProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.profile);
      queryClient.invalidateQueries(queryKeys.user);
      alert('프로필 수정에 성공했습니다');
      setModalAtomState(false);
    },
    onError: (error) => {
      alert(error);
    },
  });

  return { mutate };
};

export default useEditProfile;
