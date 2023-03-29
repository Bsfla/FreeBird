import React from 'react';
import Button from '@components/common/Button';
import { useLogin } from '@hooks/page';
import { Wrapper, Title, Input, Error } from './style';

const LoginForm = () => {
  const {
    email,
    password,
    isDisabled,
    handleLogin,
    handleChangeEmail,
    handleChangePassword,
    emailError,
    passwordError,
  } = useLogin();

  return (
    <Wrapper onSubmit={handleLogin}>
      <Title>Login</Title>
      <span>로그인이 필요한 서비스입니다</span>
      <Input
        placeholder="이메일을 입력해주세요."
        name="email"
        value={email}
        onChange={handleChangeEmail}
      />
      {emailError && (
        <Error>
          <span>{emailError}</span>
        </Error>
      )}
      <Input
        placeholder="비밀번호를 입력해주세요."
        type="password"
        name="password"
        value={password}
        onChange={handleChangePassword}
      />
      {passwordError && (
        <Error>
          <span>{passwordError}</span>
        </Error>
      )}
      <Button name="로그인" disabled={!isDisabled} />
    </Wrapper>
  );
};

export default LoginForm;
