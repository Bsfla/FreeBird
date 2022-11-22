import React from 'react';
import type { NextPage } from 'next';
import { Wrapper, Title, Input } from './style';
import { Button, AuthLayout } from '@components/common';

const Signup: NextPage = () => {
  return (
    <AuthLayout>
      <Wrapper>
        <Title>SignUp</Title>
        <span>회원 정보를 입력해주세요</span>
        <Input placeholder="닉네임" />
        <Input placeholder="이메일" />
        <Input placeholder="비밀번호" type="password" />
        <Input placeholder="비밀번호 확인" type="password" />
        <Button name="가입하기" />
      </Wrapper>
    </AuthLayout>
  );
};

export default Signup;
