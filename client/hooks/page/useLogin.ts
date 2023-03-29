import { useRouter } from 'next/router';
import { validateEmail, validatePassword } from '@lib/utils';
import { LoginFormType } from '@lib/types';
import { login } from '@apis/user';
import { AxiosError } from 'axios';
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

  console.log(isDisabled, emailError, passwordError);

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
      await login({ email, password });
      router.push(MAIN_PAGE);
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(err.response?.data);
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
