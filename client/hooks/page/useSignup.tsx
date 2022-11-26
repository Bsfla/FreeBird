import React from 'react';
import { useInput } from '@hooks/common';
import { UserFormType } from '@lib/types';
import { signUp } from '@apis/user';
import { AxiosError } from 'axios';

const useSignup = () => {
  const { form, handleChangeInput } = useInput<UserFormType>({
    email: '',
    nickname: '',
    password: '',
    passwordconfirm: '',
  });
  const { email, nickname, password, passwordconfirm } = form;

  const isDisabled =
    !email ||
    !nickname ||
    !password ||
    !passwordconfirm ||
    password !== passwordconfirm;

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signUp(form);
    } catch (err) {
      if (err instanceof AxiosError)
        return alert('이미 등록되어 있는 아이디입니다');
    }
  };

  return { form, isDisabled, handleChangeInput, handleSignup };
};

export default useSignup;
