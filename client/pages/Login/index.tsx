import React from 'react';
import type { NextPage } from 'next';
import { Wrapper, Title, Input, Button } from './style';

const Login: NextPage = () => {
  return (
    <Wrapper>
      <Title>Login</Title>
      <span>로그인이 필요한 서비스입니다</span>
      <Input placeholder="이메일" />
      <Input placeholder="비밀번호" type="password" />
      <Button>로그인</Button>
    </Wrapper>
  );
};

export default Login;
