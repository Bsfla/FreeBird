import React, { useState } from 'react';
import { Wrapper, Title, Input } from './style';
import { Button } from '@components/common';
import { UserFormType } from '@lib/types';
import { signUp } from '@apis/user';

const RegisterForm = () => {
  const [form, setForm] = useState<UserFormType>({
    email: '',
    nickname: '',
    password: '',
    passwordconfirm: '',
  });

  const { nickname, email, password, passwordconfirm } = form;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signUp(form);
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <Wrapper onSubmit={handleFormSubmit}>
      <Title>SignUp</Title>
      <span>회원 정보를 입력해주세요</span>
      <Input
        placeholder="닉네임"
        name="nickname"
        value={nickname}
        onChange={handleInputChange}
      />
      <Input
        placeholder="이메일"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
      <Input
        placeholder="비밀번호"
        name="password"
        type="password"
        value={password}
        onChange={handleInputChange}
      />
      <Input
        placeholder="비밀번호 확인"
        name="passwordconfirm"
        type="password"
        value={passwordconfirm}
        onChange={handleInputChange}
      />
      <Button name="가입하기" />
    </Wrapper>
  );
};

export default RegisterForm;
