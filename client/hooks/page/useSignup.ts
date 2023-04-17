import React, { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { signUp } from '@apis/user';
import { AxiosError } from 'axios';
import { LOGIN_PAGE } from '@consts/route';
import {
  validateEmail,
  validateNickname,
  validatePassword,
  validatePasswordConfirm,
} from '@lib/utils';

const useSignup = () => {
  const [email, setEmail] = useState({ content: '', errorMessage: '' });
  const [password, setPassword] = useState({ content: '', errorMessage: '' });
  const [nickname, setNickname] = useState({ content: '', errorMessage: '' });
  const [passwordConfirm, setPasswordConfirm] = useState({
    content: '',
    errorMessage: '',
  });
  const router = useRouter();

  const isDisabled =
    email.errorMessage === '' &&
    nickname.errorMessage === '' &&
    password.errorMessage === '' &&
    passwordConfirm.errorMessage === '' &&
    email.content.length !== 0 &&
    password.content.length !== 0 &&
    passwordConfirm.content.length !== 0 &&
    nickname.content.length !== 0;
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { response } = await signUp({
        email: email.content,
        nickname: nickname.content,
        password: password.content,
      });
      if (response?.status === 403) {
        return alert('이미 등록되어 있는 아이디입니다.');
      }
      alert('회원가입에 성공했습니다');
      router.push(LOGIN_PAGE);
    } catch (err) {
      if (err instanceof AxiosError)
        return alert('이미 등록되어 있는 아이디입니다');
    }
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail({
      content: e.target.value,
      errorMessage: validateEmail(e.target.value),
    });
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword({
      content: e.target.value,
      errorMessage: validatePassword(e.target.value),
    });

    if (passwordConfirm.content)
      setPasswordConfirm({
        ...passwordConfirm,
        errorMessage: validatePasswordConfirm(
          e.target.value,
          passwordConfirm.content
        ),
      });
  };

  const handleChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname({
      content: e.target.value,
      errorMessage: validateNickname(e.target.value),
    });
  };

  const handleChangePasswordConfirm = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm({
      content: e.target.value,
      errorMessage: validatePasswordConfirm(password.content, e.target.value),
    });
  };

  return {
    email,
    isDisabled,
    password,
    passwordConfirm,
    nickname,
    handleSignup,
    handleChangeEmail,
    handleChangeNickname,
    handleChangePassword,
    handleChangePasswordConfirm,
  };
};

export default useSignup;
