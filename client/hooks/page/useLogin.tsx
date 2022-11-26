import { useRouter } from 'next/router';
import { useInput } from '@hooks/common';
import { LoginFormType } from '@lib/types';
import { login } from '@apis/user';
import { AxiosError } from 'axios';
import { MAIN_PAGE } from '@consts/route';

const useLogin = () => {
  const { form, handleChangeInput } = useInput<LoginFormType>({
    email: '',
    password: '',
  });
  const router = useRouter();
  const { email, password } = form;

  const isDisabled = !email || !password;

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await login(form);
      router.push(MAIN_PAGE);
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(err.response?.data);
      }
    }
  };

  return { form, isDisabled, handleChangeInput, handleLogin };
};

export default useLogin;
