import React from 'react';
import { useQuery } from 'react-query';
import { queryKeys } from '@consts/queryKeys';
import { useRecoilState } from 'recoil';
import { loadMyInfo } from '@apis/user';
import { userAtomState } from '@recoil/user';

const useSetUserAtomState = () => {
  const [user, setUser] = useRecoilState(userAtomState);
  const { data } = useQuery(queryKeys.user, () => loadMyInfo(), {
    onSuccess: (data) => setUser(data),
    staleTime: Infinity
  });

  return { user };
};

export default useSetUserAtomState;
