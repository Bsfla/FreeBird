import React from 'react';
import type { NextPage } from 'next';
import { AuthLayout, Button } from '@components/common';
import { Wrapper, Title, Input } from './style';

const Login: NextPage = () => {
  return (
    <AuthLayout>
      <Wrapper>
        <Title>Login</Title>
        <span>로그인이 필요한 서비스입니다</span>
        <Input placeholder="이메일" />
        <Input placeholder="비밀번호" type="password" />
        <Button name="로그인" />
      </Wrapper>
    </AuthLayout>
  );
};

export default Login;
