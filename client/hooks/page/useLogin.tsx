import { useRouter } from 'next/router';
import { useInput } from '@hooks/common';
import { LoginFormType } from '@lib/types';
import { signUp } from '@apis/user';
import { AxiosError } from 'axios';
import { LOGIN_PAGE } from '@consts/route';

const useLogin = () => {
  const { form, handleChangeInput } = useInput<LoginFormType>({
    email: '',
    password: '',
  });
  const router = useRouter();
  const { email, password } = form;

  const isDisabled = !email || !password;
  /*
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signUp(form);
      alert('회원가입에 성공했습니다');
      router.push(LOGIN_PAGE);
    } catch (err) {
      if (err instanceof AxiosError)
        return alert('이미 등록되어 있는 아이디입니다');
    }
  };
  */

  return { form, isDisabled, handleChangeInput };
};

export default useLogin;
