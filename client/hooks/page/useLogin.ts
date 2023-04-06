import { useRouter } from 'next/router';
import { validateEmail, validatePassword } from '@lib/utils';
import { LoginFormType } from '@lib/types';
import { login } from '@apis/user';
import axios, { AxiosError } from 'axios';
import { MAIN_PAGE } from '@consts/route';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();

  const isDisabled =
    emailError == '' &&
    passwordError == '' &&
    email.length > 0 &&
    password.length > 0;

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { response } = await login({ email, password });

      if (response?.status === 401) {
        return alert('아이디와 비밀 번호를 다시 확인해주세요.');
      }
      router.push(MAIN_PAGE);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        alert(error);
      }
    }
  };

  /*
  useEffect(() => {
    if (emailError)
  }, [emailError]);
  /*
  useEffect(() => {
    checkPasswordValid();
  }, [password]);
*/
  return {
    email,
    password,
    isDisabled,
    handleLogin,
    handleChangeEmail,
    handleChangePassword,
    emailError,
    passwordError,
  };
};

export default useLogin;
