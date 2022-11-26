import React from 'react';
import { Wrapper, Title, Input } from './style';
import { Button } from '@components/common';
import { useSignup } from '@hooks/page';

const RegisterForm = () => {
  const { form, isDisabled, handleChangeInput, handleSignup } = useSignup();
  const { nickname, email, password, passwordconfirm } = form;

  return (
    <Wrapper onSubmit={handleSignup}>
      <Title>SignUp</Title>
      <span>회원 정보를 입력해주세요</span>
      <Input
        placeholder="닉네임"
        name="nickname"
        value={nickname}
        onChange={handleChangeInput}
      />
      <Input
        placeholder="이메일"
        name="email"
        value={email}
        onChange={handleChangeInput}
      />
      <Input
        placeholder="비밀번호"
        name="password"
        type="password"
        value={password}
        onChange={handleChangeInput}
      />
      <Input
        placeholder="비밀번호 확인"
        name="passwordconfirm"
        type="password"
        value={passwordconfirm}
        onChange={handleChangeInput}
      />
      <Button name="가입하기" disabled={isDisabled} />
    </Wrapper>
  );
};

export default RegisterForm;
