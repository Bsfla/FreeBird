import React, { useState } from 'react';
import { Wrapper, Title, Input } from './style';
import { Button } from '@components/common';

const RegisterForm = () => {
  return (
    <Wrapper>
      <Title>SignUp</Title>
      <span>회원 정보를 입력해주세요</span>
      <Input placeholder="닉네임" />
      <Input placeholder="이메일" />
      <Input placeholder="비밀번호" type="password" />
      <Input placeholder="비밀번호 확인" type="password" />
      <Button name="가입하기" />
    </Wrapper>
  );
};

export default RegisterForm;
