import React from 'react';
import type { NextPage } from 'next';
import { Wrapper, Title, Input, Button } from './style';

const Signup: NextPage = () => {
  return (
    <Wrapper>
      <Title>SignUp</Title>
      <span>회원 정보를 입력해주세요</span>
      <Input placeholder="닉네임" />
      <Input placeholder="이메일" />
      <Input placeholder="비밀번호" type="password" />
      <Input placeholder="비밀번호 확인" type="password" />
      <Button>가입하기</Button>
    </Wrapper>
  );
};

export default Signup;
