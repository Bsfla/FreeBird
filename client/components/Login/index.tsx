import React from 'react';
import Button from '@components/common/Button';
import { useLogin } from '@hooks/page';
import { Wrapper, Title, Input } from './style';

const LoginForm = () => {
  const { form, handleChangeInput, isDisabled, handleLogin } = useLogin();
  const { email, password } = form;

  return (
    <Wrapper onSubmit={handleLogin}>
      <Title>Login</Title>
      <span>로그인이 필요한 서비스입니다</span>
      <Input
        placeholder="이메일"
        name="email"
        value={email}
        onChange={handleChangeInput}
      />
      <Input
        placeholder="비밀번호"
        type="password"
        name="password"
        value={password}
        onChange={handleChangeInput}
      />
      <Button name="로그인" disabled={isDisabled} />
    </Wrapper>
  );
};

export default LoginForm;
