import React from 'react';
import { useInput } from '@hooks/common';
import { UserFormType } from '@lib/types';
import { signUp } from '@apis/user';

const useSignup = () => {
  const { form, handleChangeInput } = useInput<UserFormType>({
    email: '',
    nickname: '',
    password: '',
    passwordconfirm: '',
  });

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signUp(form);
    } catch (err: any) {
      console.log(err);
    }
  };

  return { form, handleChangeInput, handleSignup };
};

export default useSignup;
